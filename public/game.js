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

const clearCanvas = ({width, height}) => ctx.clearRect(
  width[0], 
  height[0], 
  width[1] + 1, 
  height[1] + 1
)

const paint = ([x, y, color]) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}
const paintGame = () => {
  clearCanvas(bounds)
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

const handleKeyAction = (action, type) => {
  if (!action) return;
  else if (action === 'SHOOT') shoot()
  else if (isDirection(action)) {
    if (type === 'keydown') player.setDir(action)
    else if (type === 'keyup') player.stopMoving(action)
  }
}

const handleKeyDown = ({ key }) => handleKeyAction(KEYBINDINGS[key], 'keydown')
const handleKeyUp = ({ key }) => handleKeyAction(KEYBINDINGS[key], 'keyup')

document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)

const gameLoop = () => { 
  updateEntities()
  paintGame()
}

const step = setInterval(gameLoop, 50)
paintGame()