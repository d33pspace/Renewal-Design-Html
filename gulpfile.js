var gulp        = require('gulp'), 
    sass        = require('gulp-sass')(require('sass')), 
    browserSync = require('browser-sync'),
    mincss      = require('gulp-clean-css'),
    minjs       = require('gulp-uglify-es'),
    minhtml     = require('gulp-minify-html');

gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.scss') 
        .pipe(sass()) 
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function(done) { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
    done()
});

gulp.task('watch', gulp.series('browser-sync', 'sass', function(done) {
    gulp.watch('app/sass/**/*.scss', gulp.series('sass')); 
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/*.js').on('change', browserSync.reload); 
    done()
}));

gulp.task('sass2', function(){ 
    return gulp.src('site/sass/**/*.scss') 
        .pipe(sass()) 
        .pipe(gulp.dest('site/css')) 
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync2', function(done) { 
    browserSync({ 
        server: { 
            baseDir: 'site' 
        },
        notify: false 
    });
    done()
});

gulp.task('watch2', gulp.series('browser-sync2', 'sass2', function(done) {
    gulp.watch('site/sass/**/*.scss', gulp.series('sass2')); 
    gulp.watch('site/*.html').on('change', browserSync.reload);
    gulp.watch('site/js/*.js').on('change', browserSync.reload); 
    done()
}));

gulp.task('mincss', function() {
    return gulp.src('app/css/main.css')
        .pipe(mincss())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('minjs', function() {
    return gulp.src('app/js/*.js')
        .pipe(minjs.default())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('minhtml', function() {
    return gulp.src('app/index.html')
        .pipe(minhtml())
        .pipe(gulp.dest('dist'))
});

gulp.task('copy-img', function() {
    return gulp.src('app/img/*.*')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('copy-svg', function() {
    return gulp.src('app/img/svg/*.*')
        .pipe(gulp.dest('dist/img/svg'))
});

gulp.task('copy-fonts', function() {
    return gulp.src('app/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('copy-docs', function() {
    return gulp.src('app/docs/*.*')
        .pipe(gulp.dest('dist/docs'))
});

gulp.task('mincopyall', gulp.series('mincss', 'minhtml', 'minjs', 'copy-img', 'copy-svg', 'copy-fonts', 'copy-docs'));