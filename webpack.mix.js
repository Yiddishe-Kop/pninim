const mix = require('laravel-mix')
const path = require('path')
require('laravel-mix-tailwind');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.browserSync('http://halpern.test:8000')
let url = process.env.APP_URL.replace(/(^\w+:|^)\/\//, '');

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css/app.css')
  .options({
    processCssUrls: false,
    hmrOptions: {
      host: url,
      port: 8080 // Can't use 443 here because address already in use
    }
  })
  .tailwind('./tailwind.config.js')
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.esm.js',
        '@': path.resolve('resources/js'),
      },
    },
    optimization: {
      concatenateModules: false,
      providedExports: false,
      usedExports: false
    }
  })


if (mix.inProduction()) {
  mix
    .version()
    .sourceMaps()
}
