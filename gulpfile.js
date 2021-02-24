const { src, dest, watch } = require("gulp")

var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

function html() {
	return src("./src/**/*.pug")
		.pipe(pug({pretty: true}))
		.pipe(dest("./dist/"))
}

function css() {

	return src("./src/scss/**/*.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({cascade: false}))
		.pipe(dest("./dist/css/"))

}
function js() {

	return src("./src/js/*.js")
		.pipe(dest("./dist/js/"));

}
exports.default = function () {
	watch("./src/**/*.pug", html);
	watch("./src/scss/**/*.scss", css);
	watch("./src/js/*.js", js);
};
