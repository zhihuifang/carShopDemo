'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //jshint ignore:line
var uglifyjs = require("uglify-js");
var fs = require('fs');
var del = require('del');
var args = require('yargs').argv;
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');
JSON.minify = JSON.minify || require("node-json-minify");

var APP_JS_FILE = "car-app-all.js",
    APP_JS_MIN_FILE = "car-app-all.min.js",
    APP_JS_MAP = "car-app-all.map",
    APP_CSS_FILE = "car-app-all.css",
    APP_CSS_MIN_FILE = "car-app-all.min.css",
    APP_CSS_MAP = "car-app-all.map",
    DIST_FOLDER = "dist/carShop/";

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('concat-files', function () {
    var assets = $.useref.assets({searchPath: '{,src},dist'});
    return gulp.src('index.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.if('*.html', $.replace(APP_JS_FILE, APP_JS_MIN_FILE)))
        .pipe($.if('*.html', $.replace(APP_CSS_FILE, APP_CSS_MIN_FILE)))
        .pipe(gulp.dest(DIST_FOLDER));
});

gulp.task('minify', function () {
    console.log("start to minify");
    var result = uglifyjs.minify([DIST_FOLDER + APP_JS_FILE], {
        outSourceMap: APP_JS_MAP,
        sourceRoot: "",
        compress: {
            warnings: false
        }
    });
    result.map = result.map.replace('"sources":[' + DIST_FOLDER, '"sources":["');
    fs.writeFileSync(DIST_FOLDER + APP_JS_MAP, result.map);
    fs.writeFileSync(DIST_FOLDER + APP_JS_MIN_FILE , result.code);
    gulp.task('minify-css', function() {
        return gulp.src('css/*.css')
            .pipe(cleanCSS({debug: true}, function(details) {
                console.log(details.name + ': ' + details.stats.originalSize);
                console.log(details.name + ': ' + details.stats.minifiedSize);
            }))
            .pipe(gulp.dest('dist'));
    });

});

gulp.task('update-index', function () {
    console.log("start to modify index.html");
});
gulp.task('copy-libs', function(){
    return gulp.src('lib/angular*.min.js')
        .pipe(gulp.dest(DIST_FOLDER + '/lib'));
});

gulp.task('copy-templates', function () {
    gulp.src('market/*.html')
        .pipe(gulp.dest(DIST_FOLDER + '/market'));
    gulp.src('cart/*.html')
        .pipe(gulp.dest(DIST_FOLDER + '/cart'));
});
gulp.task('deploy', function () {
    console.log("start to deploy");
});

gulp.task('default', function(callback) {
    runSequence('clean', 'concat-files', 'minify','minify-css', 'update-index', "deploy", callback);
});
