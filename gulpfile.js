
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var jade        = require('pug');
var exec        = require('child_process').exec;
var gutil       = require('gulp-util');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};




/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});




/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});




/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

/*
* Nikhil is trying to Gulp stuff
*/

gulp.task('jade', function(){
  return gulp.src('_jadefiles/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('_includes'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch(['index.html', '_layouts/*.html', '_includes/*'], ['jekyll-rebuild']);
    gulp.watch('_jadefiles/*.jade', ['jade']);
});




/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);



















































// var gulp        = require('gulp');
// var browserSync = require('browser-sync');
// var sass        = require('gulp-sass');
// var prefix      = require('gulp-autoprefixer');
// var cp          = require('child_process');
//
// var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
// var messages = {
//     jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
// };
//
// /**
//  * Build the Jekyll Site
//  */
// gulp.task('jekyll-build', function (done) {
//     browserSync.notify(messages.jekyllBuild);
//     return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
//         .on('close', done);
// });
//
// /**
//  * Rebuild Jekyll & do page reload
//  */
// gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
//     browserSync.reload();
// });
//
// /**
//  * Wait for jekyll-build, then launch the Server
//  */
// gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
//     browserSync({
//         server: {
//             baseDir: '_site'
//         }
//     });
// });
// gulp.task('browser-sync', function () {
//    var files = [
//       '*.html',
//       'css/**/*.css',
//       'js/**/*.js',
//       'sass/**/*.scss'
//    ];
//
//    browserSync.init(files, {
//       server: {
//          baseDir: '_site'
//       }
//    });
// });
//
// /**
//  * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
//  */
// gulp.task('sass', function () {
//     return gulp.src('_scss/main.scss')
//         .pipe(sass({
//             includePaths: ['scss'],
//             onError: browserSync.notify
//         }))
//         .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
//         .pipe(gulp.dest('_site/css'))
//         .pipe(browserSync.reload({stream:true}))
//         .pipe(gulp.dest('css'));
// });
//
// /**
//  * Watch scss files for changes & recompile
//  * Watch html/md files, run jekyll & reload BrowserSync
//  */
// gulp.task('watch', function () {
//     gulp.watch('_scss/*.scss', ['sass']);
//     gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
// });
//
// /**
//  * Default task, running just `gulp` will compile the sass,
//  * compile the jekyll site, launch BrowserSync & watch files.
//  */
// gulp.task('default', ['browser-sync', 'watch']);
