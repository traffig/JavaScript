let gulp = require('gulp'), // Сам gulp
    sass = require('gulp-sass'), // Модуль для компиляции scss
    minifyJs = require('gulp-terser'), // Минификация js
    autoPrefixer = require('gulp-autoprefixer'), // Вендорные префиксы
    bs = require('browser-sync'), // Сервер
    htmlMin = require('gulp-htmlmin'), // Минификация html
    rename = require('gulp-rename'), // Rename
    delFiles = require('del'), // Delete files
    cssMinify = require('gulp-csso'), //  Минификация css
    // babel = require('gulp-babel'), // babel
    tinify = require('gulp-tinify'); // Минификация img

gulp.task('clean', () => {
    return delFiles(['dist/**', '!dist']);
});

gulp.task('html', () => {
    return gulp.src('app/html/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    return gulp.src('app/css/normalize.css')
        .pipe(gulp.dest('dist/style'));
});

gulp.task('sass', () => {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssMinify())
        .pipe(gulp.dest('dist/style'));
});

gulp.task('js', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(minifyJs())
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('tinify', () => {
    return gulp.src('app/img/**/*')
        .pipe(tinify('TinyPNGAPIKey'))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('bower', () => {
    return gulp.src(['app/bower_components/jquery/dist/jquery.min.js', 'app/bower_components/jquery-ui/jquery-ui.min.js'])
        .pipe(gulp.dest('dist/js'));
});

gulp.task('ajax', () => {
    return gulp.src('app/ajax/**/*.json')
        .pipe(gulp.dest('dist'));
});

gulp.task('ratingStar', () => {
    return gulp.src('app/rating_star/**/*')
        .pipe(gulp.dest('dist/rating_star'));
});

gulp.task('html:watch', () => {
    return gulp.watch('app/html/**/*.html', gulp.series('html', (done) => {
        bs.reload();
        done();
    }))
});

gulp.task('sass:watch', () => {
    return gulp.watch('app/sass/**/*.sass', gulp.series('sass', (done) => {
        bs.reload();
        done();
    }))
});

gulp.task('js:watch', () => {
    return gulp.watch('app/js/**/*.js', gulp.series('js', (done) => {
        bs.reload();
        done();
    }))
});

gulp.task('server', () => {
    return bs({
        server: {
            baseDir: 'dist'
        },
        browser: 'chrome'
    });
});

gulp.task('default', gulp.series('clean',
    gulp.parallel('html', 'css', 'sass', 'js', 'ratingStar', 'tinify', 'bower', 'ajax'),
    gulp.parallel('html:watch', 'sass:watch', 'js:watch', 'server')));
