class Context {
  private canvas = null
  private ctx = null
  constructor() {
    this.canvas = document.getElementById('game')
    this.ctx = this.canvas.getContext('2d')
    return this.ctx
  }
}

class GameState {
  private ctx = new Context()
  
}