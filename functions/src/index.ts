// import { chromium } from 'playwright-core';
// import * as bundledChromium from 'chrome-aws-lambda';
// import * as functions from "firebase-functions";

import { hotp } from "otplib";

const secret = "<secret here>";

const token = hotp.generate(secret, 0);

console.log(token);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
