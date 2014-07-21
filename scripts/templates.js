this["Templates"] = this["Templates"] || {};

this["Templates"]["project"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<li class=\"project\">\n  <a href=\""
    + escapeExpression((helper = helpers.or || (depth0 && depth0.or),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.homepage), (depth0 && depth0.html_url), options) : helperMissing.call(depth0, "or", (depth0 && depth0.homepage), (depth0 && depth0.html_url), options)))
    + "\" target=\"_blank\">\n    <span class=\"title\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <div class=\"hook\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"language\">";
  if (helper = helpers.language) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.language); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  </a>\n</li>\n";
  return buffer;
  });