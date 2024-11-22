const postcssNested = require('postcss-nested');

module.exports = {
	plugins: {
		'tailwindcss': {},
		'postcss-nested': {},  // Add postcss-nested plugin here for CSS nesting
		'autoprefixer': {},
	},
};

