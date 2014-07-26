(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/*
Forked from https://github.com/markgoodyear/headhesive.js.
Translated to CoffeeScript, rewritten with Lodash and Zepto
 */
var Headhesive,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Headhesive = (function() {
  function Headhesive(elem, options) {
    var $offset, _base;
    if (options == null) {
      options = {};
    }
    this.update = __bind(this.update, this);
    this.visible = false;
    this.$window = $(window);
    this.options = _.defaults(options, {
      offset: elem,
      classes: {
        clone: "headhesive",
        stick: "headhesive--stick",
        unstick: "headhesive--unstick"
      },
      throttle: 250
    });
    if (_.isNumber(this.options.offset)) {
      this.scrollOffset = this.options.offset;
    } else if (_.isString(this.options.offset)) {
      $offset = $(this.options.offset);
      this.scrollOffset = $offset.offset().top + $offset.height();
    } else {
      throw new Error("Invalid offset: " + this.options.offset);
    }
    this.$clone = $(elem).clone();
    this.$clone.addClass(this.options.classes.clone).prependTo('body');
    this.$window.on('scroll.headhesive', _.throttle(this.update, this.options.throttle));
    if (typeof (_base = this.options).onInit === "function") {
      _base.onInit();
    }
    return;
  }

  Headhesive.prototype.destroy = function() {
    var _base;
    this.$clone.remove();
    this.$window.off('scroll.headhesive');
    if (typeof (_base = this.options).onDestroy === "function") {
      _base.onDestroy();
    }
  };

  Headhesive.prototype.stick = function() {
    var _base;
    if (!this.visible) {
      this.$clone.removeClass(this.options.classes.unstick).addClass(this.options.classes.stick);
      this.visible = true;
      if (typeof (_base = this.options).onStick === "function") {
        _base.onStick();
      }
    }
  };

  Headhesive.prototype.unstick = function() {
    var _base;
    if (this.visible) {
      this.$clone.removeClass(this.options.classes.stick).addClass(this.options.classes.unstick);
      this.visible = false;
      if (typeof (_base = this.options).onUnstick === "function") {
        _base.onUnstick();
      }
    }
  };

  Headhesive.prototype.update = function() {
    if (this.$window.scrollTop() > this.scrollOffset) {
      return this.stick();
    } else {
      return this.unstick();
    }
  };

  return Headhesive;

})();

module.exports = Headhesive;


},{}],2:[function(require,module,exports){
var $list, Headhesive, header, languages, software;

Headhesive = require('./headhesive.coffee');

window.Headhesive = Headhesive;

software = require('./software.json');

languages = require('./languages.json');

Handlebars.registerHelper('or', function(a, b) {
  return a || b;
});

Handlebars.registerHelper('lastUpdate', function(time) {
  return "Updated on " + (moment(time).format('ll'));
});

header = new Headhesive('.hero');

$list = $('.projects ul');

_.each(software, function(repo) {
  return $.get("https://api.github.com/repos/" + (repo.repo || repo), function(data) {
    if (repo.name) {
      data.name = repo.name;
    }
    return $list.append(Templates.project(data));
  });
});


},{"./headhesive.coffee":1,"./languages.json":3,"./software.json":4}],3:[function(require,module,exports){
module.exports={
  "CoffeeScript": "coffee",
  "JavaScript": "js"
}

},{}],4:[function(require,module,exports){
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

},{}]},{},[2])