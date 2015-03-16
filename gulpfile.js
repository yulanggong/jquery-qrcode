var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat');
var paths = {
	js: [
		'src/jquery.qrcode.js',
		'src/qrcode.js'
	]
};

gulp.task('js', function () {
	var stream = gulp.src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(concat('jquery.qrcode.min.js'))
		.pipe(uglify({
			beautify: {
				"ascii_only": true
			},
			compress: {
				"hoist_funs": false,
				loops: false,
				unused: false
			}
		}))
		/*.pipe(sourcemaps.write('./'))*/
		.pipe(gulp.dest('./'));

	return stream;
});

gulp.task('watch', function () {
	gulp.watch(paths.js, ['js']);
});


gulp.task('default', ['js','watch']);
