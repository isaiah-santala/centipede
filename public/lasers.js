class Laser extends Entity {
  constructor(position) {
    super(SPRITES.laser, position)
  }
  move(updateLaser) {
    const [x, y] = this.position
    const newPosition = [Math.floor(x), Math.floor(y - 1)]
    this.updatePosition(newPosition)
    updateLaser(this.position, newPosition)
  }
}

class Lasers {
  lasers = {}
  clearLasers() {
    this.lasers = {}
  }
  has(location) {
    return this.lasers[location] !== undefined
  }
  addLaser(position) {
    this.lasers[position] = new Laser(position)
  }
  updateLaser(oldPosition, newPosition) {
    // delete this.lasers[oldPosition]
    // this.lasers[newPosition] = new Laser(newPosition)
  }
  forEach(cb) {
    Object.values(this.lasers).forEach(cb)
  }
  move() {
    this.forEach(
      (laser) => laser.move(this.updateLaser)
    )
  }
}
