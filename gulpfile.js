var gulp = require('gulp');
var sass = require('gulp-sass');
var cp = require('child_process');

// Build the Jekyll
gulp.task('jekyll-build', function(done) {
  return cp.spawn('jekyll', ['build'], {
      stdio: 'inherit'
    })
    .on('close', done);
});

// Serve the Jekyll
gulp.task('jekyll-serve', function(done) {
  return cp.spawn('jekyll', ['serve'], {
      stdio: 'inherit'
    })
    .on('close', done);
});

// Build the Sass
gulp.task('sass', function() {
  return gulp.src('_sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('_site/css'));
});

// Watch the Sass
gulp.task('watch', function() {
  gulp.watch('_sass/**/*.scss', ['sass']);
});

// Build the site
gulp.task('build', ['jekyll-build', 'sass']);

// Watch the site
gulp.task('default', ['jekyll-serve', 'watch']);
