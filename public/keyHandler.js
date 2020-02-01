const handleKeyDown = ({ key }) => { console.log('keyDown', key) }
const handleKeyUp = ({key}) => {console.log('keyUp', key)}

document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)