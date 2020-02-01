class Entity {
  nose = [null, null]
  position = [null, null]
  edges = { width: [null, null], height: [null, null] }
  sprite = { dimensions: [null, null], sprite: [{ x: null, y: null, color: null }] }
  pixelData = []

  constructor(sprite, startingPosition) {
    this.sprite = sprite
    this.updatePosition(startingPosition)
  }

  getPixelData([x_loc, y_loc]) {
    return this.sprite.sprite.map(({ x, y, color, name }) => {
      return [(x + x_loc), (y_loc + y), color, name]
    })
  }
  updatePosition([x, y]) {
    const [width, height] = this.sprite.dimensions
    this.nose = [x + (width / 2), y - (height / 2)]
    this.position = [x, y]
    this.pixelData = this.getPixelData([x, y])
  }
}