import GroupGenerators from '../groups/index.js'

const Starter = function () {
  let ns = window.game_objs;
  let distance = 0

  distance += GroupGenerators.GroundFloor.call(this,
      { start: 0, length: 300 }, 'one'
    )

  distance += GroupGenerators.PitWithPlatform.call(this,
    300, ns.bw * 5, {gap: 130, offset: 80},
    {
      hazard: 'one.spikes',
      underground: 'one.underground',
      platform: 'one.surface'
    })

  distance += GroupGenerators.GroundFloor.call(this,
      { start: 300 + ns.bw * 5, length: 300 }, 'one'
    )

  return distance
}

export default Starter
