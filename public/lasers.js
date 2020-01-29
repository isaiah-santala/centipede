class Laser extends Entity {
  constructor(position) {
    super(SPRITES.laser, position)
  }
  move(addToActive) {
    const [x, y] = this.position
    const newPosition = [Math.floor(x), Math.floor(y - 1)]
    this.updatePosition(newPosition)
    addToActive(`${newPosition}`)
  }
}

class Lasers {
  lasers = []
  active = new Set()
  clearActive() {
    this.active = new Set()
  }
  addToActive = (location) => {
    this.active.add(location)
  }
  has(location) {
    return this.active.has(location)
  }
  addLaser(position) {
    this.lasers.push(new Laser(position))
  }
  forEach(cb) {
    this.lasers.forEach(cb)
  }
  move() {
    this.clearActive()
    this.lasers.forEach(
      (laser) => laser.move(this.addToActive)
    )
  }
}

// class Lasers {
//   next = 0
//   lasers = {}
//   addLaser(position) {
//     const name = `LASER_${this.next}`
//     this.lasers[name] = new Laser(name, position)
//     this.next = this.next + 1
//   }
//   removerLaser(name) {
//     delete this[name]
//   }
//   getAll() {
//     return Object.values(this.lasers)
//   }
//   forEach(cb) {
//     Object.values(this.lasers).forEach(cb)
//   }
//   move() {
//     this.forEach((laser) => {
//       laser.move()
//     })
//   }
// }
