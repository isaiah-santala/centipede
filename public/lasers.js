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
      (laser, i) => laser.move(this.addToActive)
    )
  }
}
