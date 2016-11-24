const Ruby = function (dimensions, sprite_key) {
  let ns = window.game_objs
  const ruby = ns.rubies.create(dimensions.x, dimensions.y, sprite_key)
  ruby.scale.x = ruby.scale.y = 0.4
  ns.ruby_total++;
  // ruby.body.gravity.y = 10
  return ruby
}

export default Ruby
