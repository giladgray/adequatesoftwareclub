###
Forked from https://github.com/markgoodyear/headhesive.js.
Translated to CoffeeScript, rewritten with Lodash and Zepto
###
class Headhesive
  constructor: (elem, options = {}) ->
    # Initial state
    @visible = false
    @$window = $(window)

    # Options
    @options = _.defaults options,
      offset: elem
      classes:
        clone: "headhesive"
        stick: "headhesive--stick"
        unstick: "headhesive--unstick"
      throttle: 250

    # Determine offset value
    if _.isNumber @options.offset
      @scrollOffset = @options.offset
    else if _.isString @options.offset
      $offset = $(@options.offset)
      @scrollOffset = $offset.offset().top + $offset.height()
    else
      throw new Error("Invalid offset: " + @options.offset)

    # Clone element
    @$clone = $(elem).clone()
    @$clone.addClass(@options.classes.clone).prependTo 'body'

    # Throttled scroll
    @$window.on 'scroll.headhesive', _.throttle(@update, @options.throttle)
    @options.onInit?()
    return

  # Clean up DOM and remove events
  destroy: ->
    @$clone.remove()
    @$window.off 'scroll.headhesive'
    @options.onDestroy?()
    return

  # Logic for sticking element
  stick: ->
    unless @visible
      @$clone.removeClass(@options.classes.unstick).addClass(@options.classes.stick)
      @visible = true
      @options.onStick?()
    return

  # Logic for unsticking element
  unstick: ->
    if @visible
      @$clone.removeClass(@options.classes.stick).addClass(@options.classes.unstick)
      @visible = false
      @options.onUnstick?()
    return

  # Update status of element
  update: =>
    if @$window.scrollTop() > @scrollOffset then @stick() else @unstick()

module.exports = Headhesive
