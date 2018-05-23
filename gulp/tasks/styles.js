var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hex2rgba = require('postcss-hexrgba');

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
                .pipe(postcss([cssImport, mixins, cssvars, hex2rgba, nested, autoprefixer]))
                .on('error', (error) => {
                    console.log(error.toString());
                    this.emit('end');
                })
                .pipe(gulp.dest('./app/temp/styles'));
});