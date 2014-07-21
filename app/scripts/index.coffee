software = require './software.json'

Handlebars.registerHelper 'or', (a, b) -> a or b

# return
$list = $('.projects ul')
_.each software, (repo) ->
  # provide either "user/repo" or { repo: "user/repo", name: "display name"}
  $.get "https://api.github.com/repos/#{repo.repo or repo}", (data) ->
    # override GitHub name with display name if set
    data.name = repo.name if repo.name
    $list.append Templates.project(data)
