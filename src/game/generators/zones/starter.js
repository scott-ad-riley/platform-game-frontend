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
    }
  )

  GroupGenerators.Ruby.call(this,
    { x: distance - ns.bw * 2.75, y: this.game.world.height - ns.bh * 4 } 
  )

  GroupGenerators.Tony.call(this,
    { x: distance, y: this.game.world.height - ns.floor_level - ns.bh }
  )

  distance += GroupGenerators.GroundFloor.call(this,
    { start: distance, length: 300 }, 'one'
  )


  distance += GroupGenerators.PlatformClimb.call(this,
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

  GroupGenerators.Tony.call(this,
    { x: distance - ns.bw * 3.5, y: ns.bh} 
  )

  GroupGenerators.Ruby.call(this,
    { x: distance - ns.bw * 3.5, y: 0 } 
  )


  distance += GroupGenerators.GroundFloor.call(this,
    { start: distance, length: 150 }, 'one'
  )

  GroupGenerators.Crate.call(this,
    { x: distance - ns.bw, y: this.game.world.height - ns.bh * 3 }
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    {
      x: distance, height: 3
    },
    {
      platform: 'one.underground',
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )
  
  GroupGenerators.Ruby.call(this,
    { x: distance - ns.bw * 0.8, y: this.game.world.height - ns.bw * 6 } 
  )

  GroupGenerators.Crate.call(this,
    { x: distance + ns.bw / 2, y: this.game.world.height - ns.bh * 3 }
  )
  
  GroupGenerators.Crate.call(this,
    { x: distance + ns.bw * 3, y: this.game.world.height - ns.bh * 5 }
  )

  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 4 })
  
  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 4 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.GroundFloor.call(this,
    { start: distance, length: 300 }, 'one'
  )

  GroupGenerators.Ruby.call(this,
    { x: distance - ns.bw * 4.2, y: this.game.world.height - ns.bw * 4 } 
  )

  GroupGenerators.RoofHazardColumn.call(this,
    { x: distance - ns.bw * 3 , height: 6},
    {  
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 3 })

  GroupGenerators.Crate.call(this,
    { x: distance - ns.bw * 2, y: this.game.world.height - ns.bh * 3 }
  )

  GroupGenerators.Crate.call(this,
    { x: distance - ns.bw, y: this.game.world.height - ns.bh * 4.5 }
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 4 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  GroupGenerators.Ruby.call(this,
    { x: distance - ns.bw * 0.8, y: this.game.world.height - ns.bw * 7 } 
  )

  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 3 })

  GroupGenerators.Tony.call(this,
    { x: distance - ns.bw * 2, y: this.game.world.height - ns.bh * 3 }
  )

  GroupGenerators.Crate.call(this,
    { x: distance - ns.bw * 1.5, y: this.game.world.height - ns.bh * 2 }
  )

  GroupGenerators.RoofHazardColumn.call(this,
    { x: distance, height: 5.2 },
    {  
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.GroundFloor.call(this,
    { start: distance, length: 300 }, 'one'
  )

  GroupGenerators.Ruby.call(this,
    { x: distance - 200, y: this.game.world.height - ns.floor_level - ns.bh } 
  )

  GroupGenerators.BoostCrate.call(this,
    { x: distance - ns.bw * 2, y: this.game.world.height - ns.floor_level - ns.bh * 2}
  )

  GroupGenerators.Ruby.call(this,
    { x: distance - ns.bw * 3, y: this.game.world.height - ns.floor_level - ns.bh * 7 } 
  )

  GroupGenerators.RoofHazardColumn.call(this,
    { x: distance - ns.bw, height: 5 },
    {  
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  GroupGenerators.Crate.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 6 }
  )
  GroupGenerators.Ruby.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 9 } 
  )

  GroupGenerators.BoostCrate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 2 }
  )

  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  GroupGenerators.Crate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 6 }
  )

  GroupGenerators.Ruby.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 9 } 
  )

  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  GroupGenerators.Crate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 6 }
  )

  GroupGenerators.Ruby.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 9 } 
  )

  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  GroupGenerators.Crate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 6 }
  )

  GroupGenerators.Ruby.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 9 } 
  )
  
  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 4 })

  GroupGenerators.RoofHazardColumn.call(this,
    { x: distance, height: 5.2 },
    {  
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  GroupGenerators.Crate.call(this,
    { x: distance - ns.bw, y: this.game.world.height - ns.bh * 2 }
  )

  GroupGenerators.Crate.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 2 }
  )
  
  GroupGenerators.BoostCrate.call(this,
    { x: distance + ns.bw, y: this.game.world.height - ns.bh * 2 }
  )

  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 4 })
  
  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 4 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  GroupGenerators.BoostCrate.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 5 }
  )
  distance += GroupGenerators.GroundHazard.call(this, { start: distance, length: ns.bw * 5 })

  GroupGenerators.Ruby.call(this,
    { x: distance, y: this.game.world.height - ns.bh * 9 } 
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 6 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 6 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )
  
  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 7 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )
  
  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 8 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )
  
  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  distance += GroupGenerators.FloorHazardColumn.call(this,
    { x: distance, height: 9 },
    {
      hazard: 'one.vine',
      hazard_top: 'one.vine_top'
    }
  )

  return distance
}

export default Starter
