import { chromium } from "playwright-core";
import bundledChromium from "chrome-aws-lambda";
import * as functions from "firebase-functions";
import { EventContext } from "firebase-functions";
import * as admin from "firebase-admin";
// import { ServiceAccount } from "firebase-admin";
// import serviceAccount from "../serviceAccountKey.json";
import { hotp } from "otplib";

// function generateToken(secret: string, counter = 0): string {
//   return hotp.generate(secret, 0);
// }
//
// function generateTokens(secret: string, n = 0, num = 1): string[] {
//   const tokens = [];
//   for (let i = 0; i < num; i++) {
//     const token = hotp.generate(secret, 0);
//     tokens.push(token);
//   }
//   return tokens;
// }
//
// async function postHOTPKey(url: string) {
//   const host = "api" + url.substring(url.indexOf("-"), url.indexOf("com") + 3);
//   const key = url.substring(url.lastIndexOf("/") + 1);
//   const duo =
//     "https://" + host + "/push/v2/activation/" + key + "?customer_protocol=1";
//
//   const response = await fetch(duo, { method: "POST" });
//   const data = (await response.json()) as any;
//   if (data.stat === "OK") {
//     return data.response.hotp_secret;
//   }
// }
//
// const url = "< duo URL here (DO NOT PUSH IF MODIFIED)>";
// postHOTPKey(url);
//
// process.exit();

admin.initializeApp();

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as ServiceAccount),
// });

const db = admin.firestore();
const addOne = admin.firestore.FieldValue.increment(1);

const autofillSurvey = async (context: EventContext) => {
  // `bundledChromium.executablePath` is a promise. It inflates the current
  // version of Chromium and returns the path to the binary. If not running on
  // AWS Lambda nor Google Cloud Functions, null is returned instead.
  const executablePath = await bundledChromium.executablePath;

  let browser;
  if (executablePath) {
    // on Firebase Functions
    browser = await chromium.launch({ executablePath });
  } else {
    // local execution
    browser = await chromium.launch({});
  }

  const users = await db.collection("users").get();
  for (const user of users.docs) {
    const { username, password, hotpSecret, counter } = user.data();

    const context = await browser.newContext();

    const page = await context.newPage();

    try {
      // go to login page
      await page.goto(
        "https://studenthealthoc.sa.ucsb.edu/login_dualauthentication.aspx"
      );

      // select that we're a student
      await page.locator("text=UCSB Students, Faculty and Staff").click();

      // enter username and password
      await page.locator('[placeholder="UCSBnetID"]').fill(username);
      await page.locator('[placeholder="UCSBnetID"]').press("Tab");
      await page.locator('[placeholder="Password"]').fill(password);
      await page.locator('[placeholder="Password"]').press("Enter");

      // look for cancel button (timeout in 2000ms)
      try {
        await page
          .frameLocator("#duo_iframe")
          .locator("text=Cancel")
          .click({ timeout: 5000 });
      } catch {
        console.log("no cancelBtn");
      }

      // check if user locked out
      const errorMsg = await page
        .frameLocator("#duo_iframe")
        .locator(".message.error");
      if ((await errorMsg.count()) > 0) {
        console.log("errorMsg");
        continue;
      } else {
        console.log("no errorMsg");
      }

      // press 'Enter a Passcode' if the button is there
      try {
        await page
          .frameLocator("#duo_iframe")
          .locator('button >> text="Enter a Passcode" >> visible=true')
          .click({ timeout: 1000 });
      } catch {
        console.log("no enter passcode btn");
      }

      // input passcode and press enter
      await page
        .frameLocator("#duo_iframe")
        .locator('.passcode-input-wrapper [name="passcode"] >> visible=true')
        .fill(hotp.generate(hotpSecret, counter));
      await Promise.all([
        page.waitForNavigation(/*{ url: 'https://studenthealthoc.sa.ucsb.edu/home.aspx' }*/),
        page
          .frameLocator("#duo_iframe")
          .locator('.passcode-input-wrapper [name="passcode"] >> visible=true')
          .press("Enter"),
      ]);

      // complete the survey
      await page.locator("text=Complete Survey").click();
      await page.locator('div[role="main"] a:has-text("Continue")').click();
      await page
        .locator(".question .row div:nth-child(2) .answer")
        .first()
        .click();
      await page
        .locator("div:nth-child(89) .question .row div:nth-child(2) .answer")
        .click();
      await page
        .locator("div:nth-child(118) .question .row div:nth-child(2) .answer")
        .click();
      await page
        .locator("div:nth-child(147) .question .row div:nth-child(2) .answer")
        .click();
      await page
        .locator('div[role="main"] div:has-text("No or N/A")')
        .nth(3)
        .click();
      await page.locator('div[role="main"] footer >> text=Continue').click();

      // show badge
      await page.locator("text=Show Badge").click();

      await user.ref.set({ lastSuccess: new Date() }, { merge: true });

      // increment HOTP counter
      await user.ref.update({ counter: addOne });
    } catch (e) {
      console.log(e);
      await user.ref.set({ lastFail: new Date() }, { merge: true });
    } /* finally {
      await context.tracing.stop({ path: `trace-${username}.zip` });
    }*/

    await context.close();
  }
  await browser.close();
};

exports.autofillSurvey = functions
  .runWith({
    memory: "2GB",
    timeoutSeconds: 540,
  })
  .region("us-west2")
  .pubsub.schedule("0 3 * * *")
  .timeZone("America/Los_Angeles")
  .onRun(autofillSurvey);

// autofillSurvey();
