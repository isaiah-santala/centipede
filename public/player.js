class Player extends Entity {
  dir = null

  constructor() {
    super(
      SPRITES.player,
      [Math.floor((bounds.width[1] - 10) / 2), bounds.height[1] - 11]
    )
  }
  setDir(dir) {
    this.dir = dir
  }
  handleBounds(bounds, [x, y]) {
    const [width, height] = this.sprite.dimensions
    if (x < bounds.width[0]) return [0, y]
    if (y < bounds.height[0]) return [x, 0]
    if (x + width > bounds.width[1]) return [bounds.width[1] - width, y]
    if (y + height > bounds.height[1]) return [x, bounds.height[1] - height]
    return [x, y]
  }
  move(bounds) {
    const [x, y] = this.position
    if (this.dir === 'LEFT') this.updatePosition(this.handleBounds(bounds, [x - 2, y]))
    if (this.dir === 'RIGHT') this.updatePosition(this.handleBounds(bounds, [x + 2, y]))
    if (this.dir === 'UP') this.updatePosition(this.handleBounds(bounds, [x, y - 2]))
    if (this.dir === 'DOWN') this.updatePosition(this.handleBounds(bounds, [x, y + 2]))
  }
  stopMoving(dir) {
    if (this.dir === dir) this.dir = null
  }
}