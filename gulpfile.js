const gulp = require('gulp'),
	gp = require('gulp-load-plugins')();
// custom plugins
const p = {
	runSequence: require('run-sequence'),
	browserify: require('browserify'),
	watchify: require('watchify'),
	source: require('vinyl-source-stream'),
	buffer: require('vinyl-buffer'),
	del: require('del'),
	browserSync: require('browser-sync')
};

gulp.task('clean', (done) => {
	p.del('./public').then(function() {
		done();
	});
});

gulp.task('html', () => {
	const injectSources = gulp.src([
		'./public/*.js',
		'./public/*.css'
	], {read: false});

	return gulp.src('./app/index.html')
		.pipe(gulp.dest('./public'))
		.pipe(gp.inject(injectSources, {relative:true}))
		.pipe(gulp.dest('./public'));
});

const browserify = p.browserify('./app/app.jsx', {
	cache: {},
	packageCache: {},
	plugin: [p.watchify]
}).transform('babelify', {
	presets: ['es2015', 'react']
});

function bundle() {
	console.log('Re-bundle of JS ocurring.');
	return browserify.bundle()
		.on('error', function(err) {
			console.log(err);
			this.emit('end');
		}).pipe(p.source('bundle.js'))
		.pipe(p.buffer())
		.pipe(gulp.dest('./public'));
}

gulp.task('js', () => {
	return bundle();
});

gulp.task('dev-watch', () => {
	gulp.watch('app/**/*.html', ['html']);
	browserify.on('update', bundle);
});

gulp.task('browsersync', () => {
	p.browserSync.init({
		server: {
			baseDir: './public'
		},
		files: 'public/**/*'
	});
});

gulp.task('default', () => {
	p.runSequence('clean','js', 'html', ['dev-watch', 'browsersync']);
});
