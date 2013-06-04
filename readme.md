# Grunt SVG Compression

<object data="svg/unicorn.svgz" type="image/svg+xml"></object>

Quickly and easily compress your SVG files using Grunt and the following grunt plugins:

* `contrib-watch` - Run predefined tasks whenever watched file patterns are added, changed or deleted.
* `contrib-compress` - Compress files and folders.
* `svgmin` - Minify SVG.
* `rename` - Move and/or rename files.

## Usage
* Install Grunt by following the instructions at [gruntjs.com/getting-started](http://gruntjs.com/getting-started).
* Put `Gruntfile.js` and `package.json` into the root of your project directory.
* Update the keys `svgsrc` and `svgdest` in `package.json` to reflect the location of your SVG files before and after conversion
* cd into your project directory and install the dependencies with `nom install`
* Run Grunt with `grunt`.
* If you want to watch the `svgsrc` directory (`svg/_source`by default) for changes, run `grunt watch`.