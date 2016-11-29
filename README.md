# Web Worker - simple example
Create a simple web worker object and pass messages to and from worker

Web worker will generate random numbers and return the value to the calling function

### express-web-design
Node, Express, Gulp, BrowserSync, HTML
For web designers. When html or css file in client folder is changed automatically refreshes targeted browsers.

### Prerequisites
Must have node, npm, gulp, typings installed

### How to use
Install node dependencies in your project root directory (this is where the 'package.json' file is located) using:
```sh
$ npm install
``` 
Install typescript definitions using:
```sh
$ typings init
$ typings install
```

Start application with 
```sh
$ gulp
```

Application will be initialy compiled and started. By default the server is listening on port 3036. Browser synchronization is configured in proxy mode. Client application (Angular2) can be accessed through your web browser on the following url **localhost:3033/www**. If everything is ok you should see the rendered HTML file **client/index.html** in your browser.

### Under the hood

You can configure targeted browsers for synchronization in **gulpfile.js**
```
gulp.task('configure_browser-sync', function(){
    return browserSync.init(
        {
            browser: ["chrome", "firefox", "opera"],
            proxy: "http://localhost:3033/www"                       
        }
    );
});
```