var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	livereload = require('gulp-livereload'),
	nib = require('nib'),
	connect = require('gulp-connect');

gulp.task('stylus', function() {
	gulp.src('./stylus/*.styl')
		.pipe(stylus({
			'include css': true,
			use: [nib()]
		}))
		.pipe(gulp.dest('./css'))
		.pipe(connect.reload());
});

gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(connect.reload());
});

gulp.task('connect', function() {
	connect.server({
		port: 8888,
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch('stylus/**/*.styl', function() {
		gulp.run('stylus');
	});
	gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['connect', 'stylus', 'html', 'watch']);



