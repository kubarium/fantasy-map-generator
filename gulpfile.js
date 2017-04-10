var gulp  = require('gulp'),
  gutil   = require('gulp-util')/*,
  server  = require('./build-tasks/server'),
  scripts = require('./build-tasks/scripts'),
  styles  = require('./build-tasks/styles'),
  markup  = require('./build-tasks/markup'),
  deploy  = require('./build-tasks/deploy')*/;

gulp.task('watch', [
  'watch:markup',
  'watch:styles',
  'watch:scripts'
]);

var defaultTasks = ((gutil.env.deploy) ? true: false) ? [
  'deploy'
]:[
  'serve',
  'watch'
];

gulp.task('default', defaultTasks);