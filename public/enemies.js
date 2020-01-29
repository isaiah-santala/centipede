class Enemies {
  enemies = []
  deleteEnemy = (idx) => {
    this.enemies = [
      ...this.enemies.slice(0, idx),
      ...this.enemies.slice(1)
    ]
  }
  addEnemy(enemy) {
    this.enemies.push(enemy)
  }
  forEach(cb) {
    this.enemies.forEach(cb)
  }
  move(lasers) {
    this.enemies.forEach(
      (enemy, i) => {
        enemy.move(lasers, () => this.deleteEnemy(i))
      }
    )
  }
}