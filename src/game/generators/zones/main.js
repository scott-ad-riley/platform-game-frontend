import {
  GroundFloor,
  PitWithPlatform,
  Ruby,
  Tony,
  PlatformClimb,
  FloorHazardColumn,
  Crate,
  GroundHazard,
  RoofHazardColumn,
  BoostCrate
} from '../groups/index.js'

const Main = function () {
  let ns = window.game_objs
  let distance = 0

  distance += GroundFloor.call(this,
      { start: 0, length: 300 }, 'one'
    )

  distance += PitWithPlatform.call(this,
    distance, ns.bw * 5, {gap: 130, offset: 80},
    {
      hazard: 'one.spikes',
      underground: 'one.underground',
      platform: 'one.surface'
    }
  )

  Ruby.call(this,
    { x: distance - ns.bw * 2.75, y: this.game.world.height - ns.bh * 4 }
  )

  Tony.call(this,
    { x: distance, y: this.game.world.height - ns.floor_level - ns.bh }
  )

  distance += GroundFloor.call(this,
    { start: distance, length: 300 }, 'one'
  )


  distance += PlatformClimb.call(this,
    distance,
    {
      left_platform_count: 1,
      gap: 140,
      platform:{
        height: 96 * 0.5,
        width: 96 * 0.5
      },
    },
    {
      platform: 'crate.array',
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  Tony.call(this,
    { x: distance - ns.bw * 3.5, y: ns.bh}
  )

  Ruby.call(this,
    { x: distance - ns.bw * 3.5, y: 0 }
  )


  distance += GroundFloor.call(this,
    { start: distance, length: 150 }, 'one'
  )

  Crate.call(this,
    { x: distance - ns.bw, y: this.game.world.height - ns.bh * 3 }
  )

  distance += FloorHazardColumn.call(this,
    {
      x: distance, height: 3
    },
    {
      platform: 'one.underground',
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  Ruby.call(this,
    { x: distance - ns.bw * 0.8, y: this.game.world.height - ns.bw * 6 }
  )

  Crate.call(this,
    { x: distance + ns.bw / 2, y: this.game.world.height - ns.bh * 3 }
  )

  Crate.call(this,
    { x: distance + ns.bw * 3, y: this.game.world.height - ns.bh * 5 }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 4 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroundFloor.call(this,
    { start: distance, length: 300 }, 'one'
  )

  Ruby.call(this,
    { x: distance - ns.bw * 4.2, y: this.game.world.height - ns.bw * 4 }
  )

  RoofHazardColumn.call(this,
    { x: distance - ns.bw * 3 , height: 6},
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 3 })

  Crate.call(this,
    { x: distance - ns.bw * 2, y: this.game.world.height - ns.bh * 3 }
  )

  Crate.call(this,
    { x: distance - ns.bw, y: this.game.world.height - ns.bh * 4.5 }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 4 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  Ruby.call(this,
    { x: distance - ns.bw * 0.8, y: this.game.world.height - ns.bw * 7 }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 3 })

  Tony.call(this,
    { x: distance - ns.bw * 2, y: this.game.world.height - ns.bh * 3 }
  )

  Crate.call(this,
    { x: distance - ns.bw * 1.5, y: this.game.world.height - ns.bh * 2 }
  )

  RoofHazardColumn.call(this,
    { x: distance, height: 5.2 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroundFloor.call(this,
    { start: distance, length: 300 }, 'one'
  )

  Ruby.call(this,
    { x: distance - 200, y: this.game.world.height - ns.floor_level - ns.bh }
  )

  BoostCrate.call(this,
    { x: distance - ns.bw * 2, y: this.game.world.height - ns.floor_level - ns.bh * 2}
  )

  Ruby.call(this,
    { x: distance - ns.bw * 3, y: this.game.world.height - ns.floor_level - ns.bh * 7 }
  )

  RoofHazardColumn.call(this,
    { x: distance - ns.bw, height: 5 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  Crate.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 6 }
  )
  Ruby.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 9 }
  )

  BoostCrate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 2 }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  Crate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 6 }
  )

  Ruby.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 9 }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  Crate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 6 }
  )

  Ruby.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 9 }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  Crate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 6 }
  )

  Ruby.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 9 }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  RoofHazardColumn.call(this,
    { x: distance, height: 5.2 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  Crate.call(this,
    { x: distance - ns.bw, y: this.game.world.height - ns.bh * 2 }
  )

  Crate.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 2 }
  )

  BoostCrate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 2 }
  )

  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 4 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  BoostCrate.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 5 }
  )
  distance += GroundHazard.call(this, { start: distance, length: ns.bw * 5 })

  Ruby.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 9 }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 6 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 6 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 7 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 8 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  return distance
}

export default Main
