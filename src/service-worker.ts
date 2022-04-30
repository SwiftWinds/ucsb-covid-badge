import { build, files } from "$service-worker";

import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute([...build, ...files]);

// this is required if you would like to create a prompt or so
// a SKIP_WAITING message is sent from browser window
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
