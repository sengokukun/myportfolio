# myportfolio

## 今回使用したgulpなど

### 1.gulp-sass

**Install**
`npm install gulp-sass --save-dev`

**gulpfile.js**

    var sass = require("gulp-sass");
    gulp.task("sass", function() {
    gulp.src("./src/scss/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"));
    });

---

### 2.gulp-autoprefixer

**Install**
`npm install gulp-autoprefixer --save-dev`

**gulpfile.js**

 	var autoprefixer = require("gulp-autoprefixer");

 taskに`.pipe(autoprefixer())`を追記

---

### 3.gulp-plumber

**Install**
`npm install gulp-plumber --save-dev`

**gulpfile.js**

 	var autoprefixer = require("gulp-autoprefixer");

 taskに`.pipe(plumber())`を追記

 ---

### 4.gulp-combine-media-queries

**Install**
`npm install gulp-combine-media-queries --save-dev`

**gulpfile.js**

 	var cmq = require('gulp-combine-media-queries');

	gulp.task('cmq', function () {
	  gulp.src('dist/css/**/*css')
	    .pipe(cmq({log: true}))
	    .pipe(gulp.dest('./dist/css'));
	});

gulp-combine-media-queries内のindex.js内にある151行目らへんの`file.contents = new Buffer(cssJson);`をコメントアウトする。
