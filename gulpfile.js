const gulp =require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify=require('gulp-uglify');
const imagemin=require('gulp-imagemin');

function compileSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));


}

function comprimeImagem(){

    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default=gulp.series(compileSass,comprimeJs,comprimeImagem);