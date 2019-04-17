const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const vars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, nested, vars, autoprefixer])) //postcss 'filters'
    .on('error',  (err) => {
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles')); // compiled duplicate file
});