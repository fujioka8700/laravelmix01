let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js').sass('src/sass/app.scss', 'dist/css');

// mix.js('src/assets/js/app.js', 'dist/js');