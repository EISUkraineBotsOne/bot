const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const sourcemaps = require('gulp-sourcemaps');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('copy resources', ['build'], function () {
    return gulp.src(['./src/mail/**/*.ejs', './src/mail/**/*.css'])
        .pipe(gulp.dest('build/mail'));
});

gulp.task('build', function() {
    const result = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .once("error", function () { this.once("finish", () => process.exit(-1));});

    return merge([
        result.dts.pipe(gulp.dest('build/definitions')),
        merge([gulp.src('./src/**/*.js', { base: './' }), result.js])
            //.pipe(cache(babel()))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('build'))
    ]);
});

gulp.task('default', ['build', 'copy resources']);
