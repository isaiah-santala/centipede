class Player {
  dir = null
  nose = [null, null]
  position = [null, null]
  edges = {width: [null, null], height: [null, null]}
  bounds = { width: [null, null], height: [null, null] }

  constructor(bounds) {
    this.name = 'PLAYER'
    this.sprite = SPRITES.player
    this.updatePosition([(bounds.width[1] - 10) / 2, bounds.height[1] - 10])  
    this.bounds = bounds
  }
  setDir(dir) {
    this.dir = dir
  }
  updatePosition([x, y]) {
    this.nose = [x, y - 4]
    this.position = [x, y] 
    const [width, height] = dimensions 
    this.edges = {
      width: [0 + x, width + x],
      height: [0 + y, height + y] 
    }
    console.log(this.edges)
  }
  move() {
    const [x, y] = this.position
    if (this.dir === 'LEFT') this.updatePosition([x - 2, y])
    if (this.dir === 'RIGHT') this.updatePosition([x + 2, y])
    if (this.dir === 'UP') this.updatePosition([x, y - 2])
    if (this.dir === 'DOWN') this.updatePosition([x, y + 2])
  }
  stopMoving(dir) {
    if (this.dir === dir) this.dir = null
  }
}