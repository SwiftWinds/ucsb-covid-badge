module.exports = {
  plugins: [
    require("postcss-nesting"),

    // autoprefixer should run after nesting preprocessor
    require("autoprefixer"),

    // !dev &&
    // 	cssnano({
    // 		preset: 'default',
    // 	}),
  ],
};
