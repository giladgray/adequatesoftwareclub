backbone.svg.js
===============

This app can be used as both a static website and a Chrome extension. It generates an index.html and a handful of JavaScript and CSS files for the website and a `manifest.json` for the Chrome extension. The extension replaces your browser's "new tab" page with the static website.

## Setup
> First: ensure you have [NodeJS](http://nodejs.org) installed. Run `node -v` in the terminal to confirm.
>
> Globally install `bower` and `grunt`: `npm install -g bower grunt-cli`

1. `git clone` this repository
2. `npm install` to install Grunt and its dependencies
3. `bower install` to install the source libraries
4. `grunt` to build and launch the development server

## Development
### Grunt Targets
* **`grunt build`**: compile sources (Coffee, Sass, templates) from `app/` to `dist/`
* **`grunt dev` &rArr; `grunt`**: compile source and launch a development server that watches changes and reloads the browser
* **`grunt minify`**: optimize and obfuscate compiled source files for production (run `grunt build` first)
* **`grunt dist`**: build and minify source code in `dist/`, copy production assets, and launch a static production preview server
* **`grunt deploy`**: upload production source to the [GitHub Page](http://giladgray.github.io/mmindd-mmvp/)

### Common Workflow
Generally, you'll run `grunt dev` (or simply `grunt` for convenience) while you develop. This command launches the development server which watches for changes to source files and recompiles and reloads intelligently.
