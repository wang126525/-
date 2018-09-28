/**
 * Created by jameswatt2008 on 2017/6/26.
 */


//创建gulp 对象,加载需要的功能模块
var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

// 创建一个任务 用来 编译sass
gulp.task('compileSass',function () {
    sass("./sass/**/*.scss",{style:'compressd'}).pipe(gulp.dest("./dist/css"))
});

//压缩js
// gulp.task('uglify',function () {
//     gulp.src('./js/*.js').pipe(
//         uglify()
//     ).pipe(gulp.dest("./dist/js"))
// });

gulp.task('concat',function () {
    gulp.src('./js/*.js').
    pipe(concat('test.js')).
    pipe(uglify()).
    pipe(gulp.dest('./dist/js'));


    gulp.src('./js/lunbo.js').pipe(uglify()).pipe(rename('lunbo.min.js')).
    pipe(gulp.dest("./dist/js"));


})

//创建reload 任务，更新所有 html 页面
gulp.task('reload',function () {
    gulp.src('./*.html').pipe(connect.reload());
})


//创建一个任务，观察 一个目录中的文件（./sass/**/*.scss）是否发生变化，
// 一旦发生变化就执行，compileSass
gulp.task('watch',function () {

    connect.server({
        livereload:true
    });

    gulp.watch('./sass/**/*.scss',['compileSass']);
    // gulp.watch('./js/*.js',['uglify']);

    gulp.watch('./js/*.js',['concat']);

    //监听所有的html 文件，如果有变化，就执行 reload任务

    gulp.watch('./*.html',['reload'])

})
