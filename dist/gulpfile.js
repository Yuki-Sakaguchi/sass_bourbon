var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon');

gulp.task('sass', function() {
  return gulp.src('../source/sass/*.scss')
  .pipe(plumber({
    errorHandler: function(err) {
      console.log(err.messageFormatted);
      return this.emit('end');
    }
  }))
  .pipe(sass({
    outputStyle: 'expanded',
    includePaths: require('node-bourbon')["with"]('css/')
  }))
  .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  return gulp.watch('../source/sass/*.scss', ['sass']);
});
