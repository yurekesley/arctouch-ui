const nomeProjetoFront = "smt";
const tipoArquivo = ".war";
const nomeDoZip = nomeProjetoFront+tipoArquivo;

const gulp = require('gulp');
const concat = require('gulp-concat');
const zip = require('gulp-zip');
const del = require('del');
const replace = require('gulp-string-replace');

gulp.task('war', function() {
  gulp.src(["./dist/index.html","./dist/**"])
  .pipe(zip(nomeDoZip))
  .pipe(gulp.dest("./build"));
});

gulp.task('index', function() {
  gulp.src(['./dist/index.html'])
    .pipe(replace(new RegExp('<base href="/">', 'g'), '<base href="/'+ nomeProjetoFront +'/">'))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  del.sync(['./dist/**']);
});
