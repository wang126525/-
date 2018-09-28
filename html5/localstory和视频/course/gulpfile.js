var gulp = require("gulp");
var less = require("gulp-less");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");

//复制index.html
gulp.task("copy-index",function(){
	//文件的路径
	gulp.src("./05player.html")
		.pipe(gulp.dest("dist"))//表示如果没有dist文件夹，则创建一个文件夹，并且将index.html放进去
		.pipe(connect.reload())
})
gulp.task("copy-image",function(){
//	gulp.src("./image/*.jpg")//只负责复制jpg图片
//	gulp.src("./image/*.{jpg,png}")//负责复制jpg和png格式的图片
	gulp.src("./img/**/*")//负责复制image文件夹下的所有的文件
		.pipe(imagemin())//压缩图片
		.pipe(gulp.dest("dist/img"))
		.pipe(connect.reload())
})
//合并js文件
gulp.task("script",function(){
	gulp.src("./player.js")
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload())
})


//sass编译
gulp.task("sass",function(){
	gulp.src("./main.scss")
		.pipe(sass())//编译less文件---less()
		.pipe(rename("main.css"))
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload())
})

//服务器配置  --- server   不能更改任务名
gulp.task("server",function(){
	connect.server({
		root:"dist", //启动项目目录
		livereload:true   //热加载---实时更新数据---- 在更改完数据需要的地方设置一个connect.reload(),給每一个任务都加
	})
})


//一次性执行多个任务----使用的自带的任务--build
gulp.task("build",["copy-index","copy-image","sass","script"],function(){
	console.log("执行完毕")
})

//实时监测文件的更新  ---  任务watch
gulp.task("watch",function(){
	gulp.watch("./05player.html",["copy-index"]);
	gulp.watch("./player.js",["script"]);
	gulp.watch("./main.scss",["sass"]);
})

//自动任务----执行时只需要输入gulp 即可   不需要输入 gulp defalt
gulp.task("default",["build","watch","server"])
