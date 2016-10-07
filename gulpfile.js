var gulp=require('gulp');
var browserSync=require('browser-sync');
var nodemon=require('gulp-nodemon');

gulp.task('configure_browser-sync', function(){
    return browserSync.init(
        {
            browser: ["chrome", "firefox", "opera"],
            proxy: "http://localhost:3033/www"                       
        }
    );
});

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

gulp.task('default', ['configure_nodemon', 'configure_browser-sync'], function(){
    return gulp.watch(['./client/*.html', './client/*.css'], ['sync_browser']);
});