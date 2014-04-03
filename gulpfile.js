var
	gulp 	= require("gulp"),
	mocha 	= require("gulp-mocha"),
	jshint 	= require("gulp-jshint"),
	jscs 	= require("gulp-jscs")
;

gulp.task("validate", function() {
	return gulp.src(["./lib/**/*.js", "./test/**/test_*.js"])
		.pipe(jshint())
		.pipe(jscs(__dirname + "/.jscs.json"));
});

gulp.task("test", function() {
	return gulp.src("./test/**/test_*.js")
		.pipe(mocha({
			resporter: "spec",
			bail: true
		}));
});

gulp.task("default", ["validate", "test"]);