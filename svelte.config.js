import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";

const version = +new Date();

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
      plugins: [
        replace({
          preventAssignment: true,
          values: { __KIT_VERSION__: version },
        }),
      ],
    },
  },
};

export default config;
