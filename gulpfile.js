var gulp = require("gulp");
var del = require("del");

function cleanPublic() {
  return del(["dist/public/*"]);
}

function moveAssets(){
    return gulp
    .src("public/**")
    .pipe(gulp.dest("dist/public"));
}

function clean(){
    return del(["dist/*"]);
}

exports.clean = gulp.series(clean);
exports.default = gulp.series(cleanPublic, moveAssets);
