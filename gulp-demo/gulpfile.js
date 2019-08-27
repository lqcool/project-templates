// 将任务函数和/或组合操作组合成更大的操作，这些操作将按顺序依次执行。对于使用 series() 和 parallel() 组合操作的嵌套深度没有强制限制。
const {series, src, dest , pipe, watch} = require('gulp'); 
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const px2rem = require('postcss-px2rem');


function defaultTask(cb) {
  console.log('gulp excute defaultTask');
  cb();
}

function clean(cb) {
  cb();
  console.log('gulp excute clean');
}

function build() {
  console.log('gulp excute build');
  return src('app/js/**/*.js').pipe(uglify()).pipe(dest('./build'));
}

function px2remTask() {
  let processors = [px2rem({remUnit:50})];
  return src('app/css/**/*.css').pipe(postcss(processors)).pipe(dest('./build'));
}

//文件监控
watch('app/js/**/*.js',build);
watch('app/css/**/*.css',px2remTask);


// 默认任务
exports.default = defaultTask;
exports.build = build;
// 私有任务（Private tasks） 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分。clean 和 build任务就被当作私有任务，外部
exports.clean_build = series(clean, build);
