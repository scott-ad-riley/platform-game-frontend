import GroupGenerators from '../groups/index.js'

const Starter = function () {
  let ns = window.game_objs;
  let distance = 0

  distance += GroupGenerators.GroundFloor.call(this,
      { start: 0, length: 300 }, 'one'
    )

  distance += GroupGenerators.PitWithPlatform.call(this,
    distance, ns.bw * 5, {gap: 130, offset: 80},
    {
      hazard: 'one.spikes',
      underground: 'one.underground',
      platform: 'one.surface'
    })

  distance += GroupGenerators.GroundFloor.call(this,
      { start: distance, length: 300 }, 'one'
    )

  distance += GroupGenerators.PlatformClimb.call(this,
    distance,
    {
      left_platform_count: 1,
      gap: 140,
      platform:{
        height: 15,
        width: 25
      },
    },
    {
      platform: 'one.underground',
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
    )

  return distance
}

export default Starter
