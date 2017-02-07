/* Build typescript */
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['copy templates'], function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('build'));
});

gulp.task('copy templates', function () {
    return gulp.src(['./src/mail/**/*.ejs', './src/mail/**/*.css'])
        .pipe(gulp.dest('build/mail'));
})