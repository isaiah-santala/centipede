class Spider extends Entity {
  constructor() {
    super(SPRITES.spider, [50, 125])
  }
  wasShot = ([x, y], lasers) => lasers.has(`${[x, y]}`)
  move(lasers, deleteSelf) {
    this.pixelData.forEach((pixel) => {
      if (this.wasShot(pixel, lasers)) {
        deleteSelf()
      }
    })
  }
}