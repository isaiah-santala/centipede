canvas = document.getElementById('game')
ctx = canvas.getContext('2d')
ctx.scale(CONFIG.canvasScale, CONFIG.canvasScale)

const canvasBounds = {
  width: [0, (canvas.width / CONFIG.canvasScale) - 1],
  height: [0, (canvas.height / CONFIG.canvasScale) - 1]
}
const clearCanvas = () => {
  const { width, height } = canvasBounds
  ctx.clearRect(
    width[0],
    height[0],
    width[1] + 1,
    height[1] + 1
  )
}
const paint = ([x, y, color]) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}
const paintGame = () => {
  clearCanvas()
}
