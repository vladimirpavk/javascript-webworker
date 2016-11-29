var gulp=require('gulp');

var browserSync=require('browser-sync');
browserSync.init(
        {
            browser: ["chrome"],//, "firefox", "opera"],
            proxy: "http://localhost:3033/www"                       
        }
    );

var nodemon=require('gulp-nodemon');

gulp.task('sync_browser', function(){
    return browserSync.reload();
});

gulp.task('configure_nodemon', function(){
    return nodemon({
        script: './server/main.js'
        })
        .on('start', function(){
            console.log("Nodemon started on index.js....");    
        })
        .on('crash', function(){
            console.log("Nodemon crashed on any reason...");
        });
});

gulp.task('default', ['configure_nodemon'], function(){
    return gulp.watch(['./client/**/*.html', './client/**/*.css', './client/**/*.js'], ['sync_browser']);
});