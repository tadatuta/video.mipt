var gulp = require('gulp');
var stylus = require('gulp-stylus');
var livereload = require('gulp-livereload');
var nib = require('nib');
var rupture = require('rupture');
var connect = require('gulp-connect');

gulp.task('stylus', function() {
	gulp.src('./stylus/**/*.styl')
		.pipe(stylus({
			'include css': true,
			use: [nib(), rupture()]
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



