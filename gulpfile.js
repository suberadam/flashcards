var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var gulp = require('gulp');
var browserify = require('browserify');         // 
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

/**
 * Build an output file. Babelify is used to transform 'jsx' code to JavaScript code. 
 **/
gulp.task("build", function(){
    var options = {
        entries: "./src/app.js",   // Entry point
        extensions: [".js"],            // consider files with these extensions as modules 
        debug: argv.production ? false : true,  // add resource map at the end of the file or not
        paths: ["./src/"]           // This allows relative imports in require, with './scripts/' as root
    };

    return browserify(options)
        .transform(babelify, {presets: ["react"]})
        .bundle()
        .pipe(source("main.min.js"))
        .pipe(gulpif(argv.production, buffer()))    // Stream files
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulp.dest("./public/build"));
});
