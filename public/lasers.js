class Laser {
  constructor(name, position) {
    this.name = name
    this.position = position
    this.sprite = SPRITES.laser
  }
  move() {
    const [x, y] = this.position
    this.position = [x, y - 1]
    return this
  }
}

class Lasers {
  next = 0
  lasers = {}
  addLaser(position) {
    const name = `LASER_${this.next}`
    this.lasers[name] = new Laser(name, position)
    this.next = this.next + 1
  }
  removerLaser(name) {
    delete this[name]
  }
  getAll() {
    return Object.values(this.lasers)
  }
  forEach(cb) {
    Object.values(this.lasers).forEach(cb)
  }
  move() {
    this.forEach((laser) => {
      this.lasers[laser.name] = laser.move()
    })
  }
}
