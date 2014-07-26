(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $list, languages, software;

software = require('./software.json');

languages = require('./languages.json');

Handlebars.registerHelper('or', function(a, b) {
  return a || b;
});

Handlebars.registerHelper('lastUpdate', function(time) {
  return "Updated on " + (moment(time).format('ll'));
});

$list = $('.projects ul');

_.each(software, function(repo) {
  return $.get("https://api.github.com/repos/" + (repo.repo || repo), function(data) {
    if (repo.name) {
      data.name = repo.name;
    }
    return $list.append(Templates.project(data));
  });
});


},{"./languages.json":2,"./software.json":3}],2:[function(require,module,exports){
module.exports={
  "CoffeeScript": "coffee",
  "JavaScript": "js"
}

},{}],3:[function(require,module,exports){
module.exports=[
  {
    "name": "backstrap",
    "repo": "giladgray/generator-backstrap"
  },
  "ilangray/tv",
  "giladgray/grunt-intro",
  "giladgray/regexjs",
  "ilangray/Thunderscore",
  {
    "name": "switchtab",
    "repo": "giladgray/chrome-switchtab"
  }
]

},{}]},{},[1])