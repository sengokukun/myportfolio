
// var gulp = require('gulp'),
//     sass = require('gulp-sass');
//
// gulp.task('sass',function(){
//   gulp.src('./src/scss/style.scss')
//   .pipe(sass({style : 'expented'}))
//   .pipe(gulp.dest('./dist/css'));
//   return false;
// });
//
// gulp.task('watch',function(){
//   gulp.watch('./src/scss/style.scss',['sass']);
// });
//
// gulp.task('default',['sass','watch']);





var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("sass", function() {
    gulp.src('./src/sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browser.reload({stream:true}));
});

gulp.task("default", function() {
    gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch('./src/sass/style.scss',['sass']);
});
