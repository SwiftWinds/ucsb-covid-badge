import { chromium } from "playwright-core";
import * as bundledChromium from "chrome-aws-lambda";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { hotp } from "otplib";

function generate_token(secret: string, n: number=0) : string {
    const token = hotp.generate(secret, 0);
    return token;
}

function generate_tokens(secret: string, n: number=0, num: number=1) : string [] {
    const tokens = [];
    for (let i : number = 0; i < num; i++) {
	const token = hotp.generate(secret, 0);
	tokens.push(token);
    }
    return tokens;
}

function acquire_hotp_key(url_string: string) : string {
    return null;
}

admin.initializeApp();

const db = admin.firestore();

exports.autofillSurvey = functions
  .runWith({
    memory: "2GB",
    timeoutSeconds: 540,
  })
  .pubsub.schedule("0 3 * * *")
  .timeZone("America/Los_Angeles")
  .onRun(async () => {
    const browser = await Promise.resolve(bundledChromium.executablePath).then(
      (executablePath) => {
        if (!executablePath) {
          // local execution
          return chromium.launch({});
        }
        return chromium.launch({ executablePath });
      }
    );

    const users = await db.collection("users").get();
    for (const user of users.docs) {
      const { username, password, hotpSecret } = user.data();

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
      await page.locator('[placeholder="Password"]').click();
      // Fill [placeholder="Password"]
      await page.locator('[placeholder="Password"]').fill(password);
      // Click input:has-text("Log In")
      await page.locator('input:has-text("Log In")').click();
      // assert.equal(page.url(), 'https://sso.ucsb.edu/cas/login?service=https%3a%2f%2fstudenthealthoc.sa.ucsb.edu%2f');
      // Click text=Cancel
      await page.frameLocator("#duo_iframe").locator("text=Cancel").click();
      // Click text=Choose an authentication method Duo Push Used automatically Send Me a Push Passc >> #passcode
      await page
        .frameLocator("#duo_iframe")
        .locator(
          "text=Choose an authentication method Duo Push Used automatically Send Me a Push Passc >> #passcode"
        )
        .click();
      // Fill text=Passcode Log In >> [placeholder="ex\. 867539"]
      await page
        .frameLocator("#duo_iframe")
        .locator('text=Passcode Log In >> [placeholder="ex\\. 867539"]')
        .fill("<hotp code>");
      // Click text=Log In
      await Promise.all([
        page.waitForNavigation(/*{ url: 'https://studenthealthoc.sa.ucsb.edu/home.aspx' }*/),
        page.frameLocator("#duo_iframe").locator("text=Log In").click(),
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
    }
    await browser.close();
  });
