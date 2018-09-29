var gulp = require('gulp');

var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

var DIST = 'dist';

var dist = function(subpath) {
	return !subpath ? DIST : path.join(DIST, subpath);
};

gulp.task('sass', function () {
	gulp.src('./src/css/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist'));
});


var browser = require('browser-sync');
var reload = browser.reload;
gulp.task('serve', function () {
	browser({
		port: 4500,
		open: false,
		ghostMode: false,
		server: {
			baseDir: './dist'
		}
	});
});


gulp.task('watch', function () {
	gulp.watch("./src/css/**", ['sass']);
	gulp.watch("./src/html/**", ['html']);
	gulp.watch("./src/images/**", ['copyImages']);
	gulp.watch("./src/js/**", ['copyJavaScriptFiles']);
});

gulp.task('html', function () {
	gulp.src("./src/html/*.html")
		.pipe(gulp.dest("./dist"))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('copyImages', function() {
	gulp.src([
		'./src/images/*',
	]).pipe(gulp.dest("./dist/images"))
	.pipe(reload({
		stream: true
	}));
});

gulp.task('copyJsonFiles', function() {
	gulp.src([
		'./src/json/*',
	]).pipe(gulp.dest("./dist/json"))
	.pipe(reload({
		stream: true
	}));
});

gulp.task('copyJavaScriptFiles', function() {
	gulp.src([
		'./src/js/*',
	]).pipe(gulp.dest("./dist/js"))
	.pipe(reload({
		stream: true
	}));
});

gulp.task('default', ['sass', 'html', 'watch', 'serve', 'copyImages', 'copyJsonFiles','copyJavaScriptFiles']);