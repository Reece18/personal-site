var gulp = require("gulp"),
	sass = require("gulp-sass"),
	babel = require("gulp-babel"),
	autoprefixer = require("gulp-autoprefixer"),
	hash = require("gulp-hash"),
	del = require("del");

const CompileSASS = function() {
	// del(["static/assets/css/**/*"])

	//compile hashed css files
	return gulp
		.src("scss/**/*.scss")
		.pipe(
			sass({
				outputStyle: "compressed",
			}),
		)
		.on("error", function(err) {
			console.log(err.toString());

			this.emit("end");
		})
		.pipe(
			autoprefixer({
				browsers: ["last 20 versions"],
			}),
		)
		.pipe(gulp.dest("css/"))
		.on("error", function(error) {
			console.error(error);
		})
		.on("end", function() {
			console.log("finish");
		});
};

gulp.task("compileJS", function() {
	return gulp
		.src("js/main.js")
		.pipe(babel())
		.pipe(gulp.dest("js/custom"));
});

gulp.task("build", CompileSASS);

// Watch asset folder for changes
gulp.task("watch", function() {
	gulp.watch("scss/**/*", gulp.series("build"));
});

gulp.task("default", gulp.series("build"));
