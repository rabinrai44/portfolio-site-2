const   gulp            = require('gulp'),
        browswerSync    = require('browser-sync').create(),
        sass            = require('gulp-sass');

// Compile sass into CSS & Auto-inject into browsers 
gulp.task('sass', () => {
    return gulp.src([
            'node_modules/bootstrap/scss/bootstrap.scss', 
            'src/scss/*.scss'
            ])
            .pipe(sass({outputStyle: 'compressed'})
            .on('error', sass.logError))
            .pipe(gulp.dest('src/css'))
            .pipe(browswerSync.stream());
});

// Move the JS file into /src/js folder 
gulp.task('js', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js', 
        'node_modules/popper.js/dist/umd/popper.min.js'
    ])
    .pipe(gulp.dest('src/js'))
    .pipe(browswerSync.stream());
});

// Static server + watching scss/html files 
gulp.task('serve', ['sass'], () => {

    browswerSync.init({
        server: './src'
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/**/*.scss'], ['sass']);
    gulp.watch('src/*.html').on('change', browswerSync.reload);
});

// Run gulp task
gulp.task('default', ['js', 'serve']);