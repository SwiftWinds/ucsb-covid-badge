import { chromium } from "playwright-core";
import bundledChromium from "chrome-aws-lambda";
// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { fetch } from "node-fetch";
import { ServiceAccount } from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json";
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
async function postHOTPKey(url: string) {
    let host = 'api' + url.substring(url.indexOf('-'), url.indexOf('com') + 3);
    let key = url.substring(url.lastIndexOf('/') + 1);
    let duo = 'https://' + host + '/push/v2/activation/' + key + '?customer_protocol=1';

    const response = await fetch(duo, {method: 'POST'})
    const data = await response.json();
    const obj = JSON.parse(data);
    console.log(response);
    console.log(data);
    console.log(obj);
    console.log(obj.response.hotp_secret);

    return null;
    if (obj.stat == 'OK') {
	secret = obj.response.hotp_secret;
    }

    return secret;
}

url = '< duo URL here (DO NOT PUSH IF MODIFIED)>'
postHOTPKey(url);

process.exit();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

const db = admin.firestore();
const addOne = admin.firestore.FieldValue.increment(1);

const autofillSurvey = async () => {
  const browser = await Promise.resolve(bundledChromium.executablePath).then(
    (executablePath) => {
      if (!executablePath) {
        // local execution
        return chromium.launch({
          headless: false,
        });
      }
      return chromium.launch({ executablePath, headless: false });
    }
  );

  const users = await db.collection("users").get();
  for (const user of users.docs) {
    const { username, password, hotpSecret, counter } = user.data();
    if (username === "mathewwang") {
      continue;
    }

    const context = await browser.newContext();
    // Open new page
    const page = await context.newPage();
    // Go to https://studenthealthoc.sa.ucsb.edu/login_dualauthentication.aspx
    await page.goto(
      "https://studenthealthoc.sa.ucsb.edu/login_dualauthentication.aspx"
    );
    // Click text=UCSB Students, Faculty and Staff
    await page.locator("text=UCSB Students, Faculty and Staff").click();
    // assert.equal(page.url(), 'https://sso.ucsb.edu/cas/login?service=https%3a%2f%2fstudenthealthoc.sa.ucsb.edu%2f');
    // Fill [placeholder="UCSBnetID"]
    await page.locator('[placeholder="UCSBnetID"]').fill(username);
    // Click [placeholder="Password"]
    await page.locator('[placeholder="UCSBnetID"]').press("Tab");
    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill(password);
    // Click input:has-text("Log In")
    await page.locator('[placeholder="Password"]').press("Enter");
    // assert.equal(page.url(), 'https://sso.ucsb.edu/cas/login?service=https%3a%2f%2fstudenthealthoc.sa.ucsb.edu%2f');
    // Fill text=Passcode Your next SMS Passcode starts with 2 Log In >> [placeholder="ex\. 867539"]
    // Click html
    await page.locator("#duo_iframe").waitFor();
    try {
      await page.waitForSelector("#duo_iframe >> text=Cancel", {
        timeout: 2000,
      });
      const cancelBtn = await page
        .frameLocator("#duo_iframe")
        .locator("text=Cancel");
      console.log("cancelBtn", cancelBtn);
      console.log("cancelBtn.count()", await cancelBtn.count());
      if ((await cancelBtn.count()) > 0) {
        await cancelBtn.click();
      }
    } catch {
      console.log("no cancelBtn");
    }
    await page
      .frameLocator("#duo_iframe")
      .locator('button >> text="Enter a Passcode" >> visible=true')
      .click();
    await page
      .frameLocator("#duo_iframe")
      .locator('.passcode-input-wrapper [name="passcode"] >> visible=true')
      .fill(hotp.generate(hotpSecret, counter));
    // Press Enter
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://studenthealthoc.sa.ucsb.edu/home.aspx' }*/),
      page
        .frameLocator("#duo_iframe")
        .locator('.passcode-input-wrapper [name="passcode"] >> visible=true')
        .press("Enter"),
    ]);
    // Click text=Complete Survey
    await page.locator("text=Complete Survey").click();
    // assert.equal(page.url(), 'https://studenthealthoc.sa.ucsb.edu/CheckIn/Survey/Intro/24');
    // Click div[role="main"] a:has-text("Continue")
    await page.locator('div[role="main"] a:has-text("Continue")').click();
    // assert.equal(page.url(), 'https://studenthealthoc.sa.ucsb.edu/CheckIn/Survey/ShowAll/24');
    // Click .question .row div:nth-child(2) .answer >> nth=0
    await page
      .locator(".question .row div:nth-child(2) .answer")
      .first()
      .click();
    // Click div:nth-child(89) .question .row div:nth-child(2) .answer
    await page
      .locator("div:nth-child(89) .question .row div:nth-child(2) .answer")
      .click();
    // Click div:nth-child(118) .question .row div:nth-child(2) .answer
    await page
      .locator("div:nth-child(118) .question .row div:nth-child(2) .answer")
      .click();
    // Click div:nth-child(147) .question .row div:nth-child(2) .answer
    await page
      .locator("div:nth-child(147) .question .row div:nth-child(2) .answer")
      .click();
    // Click div[role="main"] div:has-text("No or N/A") >> nth=3
    await page
      .locator('div[role="main"] div:has-text("No or N/A")')
      .nth(3)
      .click();
    // Click div[role="main"] footer >> text=Continue
    await page.locator('div[role="main"] footer >> text=Continue').click();
    // assert.equal(page.url(), 'https://studenthealthoc.sa.ucsb.edu/SurveyFormsHome.aspx?success=1');
    // Click text=Show Badge
    await page.locator("text=Show Badge").click();
    // ---------------------
    await context.close();

    await user.ref.update({ counter: addOne });
  }
  await browser.close();
};

// exports.autofillSurvey = functions
//   .runWith({
//     memory: "2GB",
//     timeoutSeconds: 540,
//   })
//   .pubsub.schedule("0 3 * * *")
//   .timeZone("America/Los_Angeles")
//   .onRun(autofillSurvey);

autofillSurvey();
