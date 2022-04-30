import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import sw from "kit-sw-workbox";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    adapter: adapter(),

    vite: {
      plugins: [sw({ routes: ["/"] })],
    },
  },
};

export default config;
