canvas = document.getElementById('game')
ctx = canvas.getContext('2d')
scale = 2
ctx.scale(scale, scale)

const bounds = {
  width: [0, (canvas.width / scale) - 1],
  height: [0, (canvas.height / scale) - 1]
}

let pixels = []
const player = new Player(bounds)  
const lasers = new Lasers()
const enemies = new Enemies()
enemies.addEnemy(new Spider())

const clearCanvas = () => ctx.clearRect(
  bounds.width[0], 
  bounds.height[0], 
  bounds.width[1] + 1, 
  bounds.height[1] + 1
)

const paint = ([x, y, color]) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}
const paintGame = () => {
  clearCanvas()
  pixels.forEach(paint)
}

const moveEntities = () => {
  lasers.move()
  enemies.move(lasers)
  player.move(bounds)
}
const storePixels = ({ pixelData }) => pixels = [...pixels, ...pixelData]
const updateEntitiesState = () => {
  pixels = []
  lasers.forEach(storePixels)
  enemies.forEach(storePixels)
  storePixels(player)
}
const updateEntities = () => {
  moveEntities()
  updateEntitiesState()
}

const shoot = () => {
  lasers.addLaser(player.nose)
}

const isDirection = (str) => DIRECTIONS[str] !== undefined

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
  updateEntities()
  paintGame()
}

const step = setInterval(gameLoop, 50)
paintGame()