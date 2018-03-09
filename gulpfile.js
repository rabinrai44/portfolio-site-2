const   gulp            = require('gulp'),
        browswerSync    = require('browser-sync').create(),
        sass            = require('gulp-sass'),
        imagemin        = require('gulp-imagemin'),
        del             = require('del'),
        usemin          = require('gulp-usemin'),
        rev             = require('gulp-rev'),
        cssnano         = require('gulp-cssnano'),
        uglify          = require('gulp-uglify');

// Compile sass into CSS & Auto-inject into browsers 
gulp.task('sass', () => {
    return gulp.src([
            'node_modules/bootstrap/scss/bootstrap.scss', 
            'src/scss/*.scss'
            ])
            .pipe(sass()
            .on('error', sass.logError))
            .pipe(gulp.dest('src/temp/css'))
            .pipe(browswerSync.stream());
});

// Move the JS file into /src/js folder 
gulp.task('js', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js', 
        'node_modules/popper.js/dist/umd/popper.min.js'
    ])
    .pipe(gulp.dest('src/temp/js'))
    .pipe(browswerSync.stream());
});

// Delete Dist Folder Task (deploying to the github-pages it need to have 'docs' folder intead of dist)
gulp.task('deleteDistFolder', () => {
    return del('./docs');
});

// Image Optimizes Task 
gulp.task('optimizeImages', ['deleteDistFolder'], () => {
    return gulp.src(['./src/assets/images/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
        .pipe(gulp.dest('./docs/assets/images'));
});

// Usemin Task
gulp.task('usemin', ['sass', 'js'], () => {
    return gulp.src('./src/index.html')
        .pipe(usemin({
            css: [() =>{return rev()}, () => {return cssnano()}],
            js: [() => {return rev()}, () => {return uglify()}]
        }))
        .pipe(gulp.dest('./docs'));
});

// Usemin Trigger 
gulp.task('useminTrigger', ['deleteDistFolder'], () => {
    gulp.start('usemin');
});

// Previewing Dist Task
gulp.task('previewDist', () => {
    browswerSync.init({
        notify: false,
        server: {
            baseDir: 'docs'
        }
    });
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

// Build Task for Production Ready 
gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'useminTrigger']);
