# TODO: generate software.json from repo names in Grunt task instead of via jQuery
software = require './software.json'
languages = require './languages.json'

Handlebars.registerHelper 'or', (a, b) -> a or b

# return
$list = $('.projects ul')
_.each software, (repo) ->
  # provide either "user/repo" or { repo: "user/repo", name: "display name"}
  $.get "https://api.github.com/repos/#{repo.repo or repo}", (data) ->
    # override GitHub name with display name if set
    data.name = repo.name if repo.name
    # override language with shorter form if present
    # shortLang = languages[data.language]
    # data.language = shortLang if shortLang
    $list.append Templates.project(data)
