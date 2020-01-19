canvas = document.getElementById('game')
ctx = canvas.getContext('2d')
scale = 2
ctx.scale(scale, scale)

const bounds = {
  width: [0, canvas.width / scale],
  height: [0, canvas.height / scale]
}

const player = new Player(bounds)  
const lasers = new Lasers()

const clearCanvas = () => ctx.clearRect(
  bounds.x[0], 
  bounds.y[0], 
  bounds.x[1] + 1, 
  bounds.y[1] + 1
)

const paint = ({ x, y, color }, [x_loc, y_loc]) => {
  ctx.fillStyle = color
  ctx.fillRect((x + x_loc), (y + y_loc), 1, 1)
}
const paintEntity = ({ sprite, position }) => sprite.image.forEach((pixel) => paint(pixel, position))
const paintGame = () => {
  clearCanvas()
  lasers.forEach(paintEntity)
  paintEntity(player)
}

const shoot = () => {
  lasers.addLaser(player.nose)
}

const isDirection = (str) => DIRECTIONS[str] !== undefined
const moveIsValid = () => 

const handleAction = (action, type) => {
  if (!action) return;
  else if (action === 'SHOOT') shoot()
  else if (isDirection(action)) {
    if (type === 'keydown') player.setDir(action)
    else if (type === 'keyup') player.stopMoving(action)
  }
}

const handleKeyDown = ({ key }) => handleAction(KEYBINDINGS[key], 'keydown')
const handleKeyUp = ({ key }) => handleAction(KEYBINDINGS[key], 'keyup')

document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)

const gameLoop = () => {  
  lasers.move()
  player.move()
  paintGame()
}

// const step = setInterval(gameLoop, 50)
paintGame()