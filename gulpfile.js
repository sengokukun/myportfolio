var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var cmq = require('gulp-combine-media-queries');

gulp.task('cmq', function () {
  gulp.src('dist/css/**/*css')
    .pipe(cmq({log: true}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("sass", function() {
    gulp.src('./src/scss/**/*scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browser.reload({stream:true}));
});

gulp.task("default", function() {
    gulp.watch(["./dist/js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch('./src/scss/**/*scss',['sass']);
    gulp.watch('dist/css/**/*css',['cmq']);
});
