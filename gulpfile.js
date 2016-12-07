// Gulp Configuration File
const gulp = require("gulp");
const browserify = require("browserify");
const reactify = require("reactify");
const source = require("vinyl-source-stream");
const glob = require('glob');

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/jsx/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("js/main.js"))
        .pipe(gulp.dest("app/dist/assets"))
});
gulp.task("main", ["bundle"], function () {
    return gulp.src(["app/index.html"])
        .pipe(gulp.dest("app/dist"));
});
gulp.task("lib", ["bundle"], function(){
    return gulp.src(["app/assets/lib/**"])
        .pipe(gulp.dest("app/dist/assets/lib"));
});
gulp.task("img", ["bundle"], function() {
    return gulp.src(["app/assets/img/**"])
        .pipe(gulp.dest("app/dist/assets/img"));
});
gulp.task('css', ["bundle"], function () {
    gulp.src('app/assets/css/**')
        .pipe(gulp.dest('app/dist/assets/css'));
});
gulp.task("default",["main", "lib", "img", "css"],function(){
   console.log("Gulp completed..."); 
});