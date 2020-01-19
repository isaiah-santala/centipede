const SPRITES = {
  player: {
    dimensions: [6, 7],
    sprite: [
      { x: 3, y: 0, color: 'beige' },

      { x: 2, y: 1, color: 'beige' },
      { x: 3, y: 1, color: 'beige' },
      { x: 4, y: 1, color: 'beige' },

      { x: 1, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'red' },
      { x: 3, y: 2, color: 'beige' },
      { x: 4, y: 2, color: 'red' },
      { x: 5, y: 2, color: 'red' },

      { x: 0, y: 3, color: 'beige' },
      { x: 1, y: 3, color: 'red' },
      { x: 2, y: 3, color: 'red' },
      { x: 3, y: 3, color: 'beige' },
      { x: 4, y: 3, color: 'red' },
      { x: 5, y: 3, color: 'red' },
      { x: 6, y: 3, color: 'beige' },

      { x: 0, y: 4, color: 'beige' },
      { x: 1, y: 4, color: 'beige' },
      { x: 2, y: 4, color: 'beige' },
      { x: 3, y: 4, color: 'beige' },
      { x: 4, y: 4, color: 'beige' },
      { x: 5, y: 4, color: 'beige' },
      { x: 6, y: 4, color: 'beige' },

      { x: 1, y: 5, color: 'beige' },
      { x: 2, y: 5, color: 'beige' },
      { x: 3, y: 5, color: 'beige' },
      { x: 4, y: 5, color: 'beige' },
      { x: 5, y: 5, color: 'beige' },

      { x: 2, y: 6, color: 'beige' },
      { x: 3, y: 6, color: 'beige' },
      { x: 4, y: 6, color: 'beige' },

      { x: 2, y: 7, color: 'beige' },
      { x: 3, y: 7, color: 'beige' },
      { x: 4, y: 7, color: 'beige' }
    ],
  },

  mushroom: {
    dimensions: [7, 7],
    sprite: [
      { x: 2, y: 0, color: 'red' },
      { x: 3, y: 0, color: 'red' },
      { x: 4, y: 0, color: 'red' },
      { x: 5, y: 0, color: 'red' },

      { x: 1, y: 1, color: 'red' },
      { x: 2, y: 1, color: 'limeGreen' },
      { x: 3, y: 1, color: 'limeGreen' },
      { x: 4, y: 1, color: 'limeGreen' },
      { x: 5, y: 1, color: 'limeGreen' },
      { x: 6, y: 1, color: 'red' },

      { x: 0, y: 2, color: 'red' },
      { x: 1, y: 2, color: 'limeGreen' },
      { x: 2, y: 2, color: 'limeGreen' },
      { x: 3, y: 2, color: 'limeGreen' },
      { x: 4, y: 2, color: 'limeGreen' },
      { x: 5, y: 2, color: 'limeGreen' },
      { x: 6, y: 2, color: 'limeGreen' },
      { x: 7, y: 2, color: 'red' },

      { x: 0, y: 3, color: 'red' },
      { x: 1, y: 3, color: 'limeGreen' },
      { x: 2, y: 3, color: 'limeGreen' },
      { x: 3, y: 3, color: 'limeGreen' },
      { x: 4, y: 3, color: 'limeGreen' },
      { x: 5, y: 3, color: 'limeGreen' },
      { x: 6, y: 3, color: 'limeGreen' },
      { x: 7, y: 3, color: 'red' },

      { x: 0, y: 4, color: 'red' },
      { x: 1, y: 4, color: 'red' },
      { x: 2, y: 4, color: 'red' },
      { x: 3, y: 4, color: 'red' },
      { x: 4, y: 4, color: 'red' },
      { x: 5, y: 4, color: 'red' },
      { x: 6, y: 4, color: 'red' },
      { x: 7, y: 4, color: 'red' },

      { x: 2, y: 5, color: 'red' },
      { x: 3, y: 5, color: 'limeGreen' },
      { x: 4, y: 5, color: 'limeGreen' },
      { x: 5, y: 5, color: 'red' },

      { x: 2, y: 6, color: 'red' },
      { x: 3, y: 6, color: 'limeGreen' },
      { x: 4, y: 6, color: 'limeGreen' },
      { x: 5, y: 6, color: 'red' },

      { x: 2, y: 7, color: 'red' },
      { x: 3, y: 7, color: 'red' },
      { x: 4, y: 7, color: 'red' },
      { x: 5, y: 7, color: 'red' }
    ],
  },

  spider: {
    dimensions: [11, 7],
    sprite: [
      { x: 3, y: 0, color: 'tan'},
      { x: 11, y: 0, color: 'tan' },

      { x: 3, y: 1, color: 'tan' },
      { x: 11, y: 1, color: 'tan' },

      { x: 2, y: 2, color: 'tan' },
      { x: 4, y: 2, color: 'tan' },
      { x: 7, y: 2, color: 'limeGreen' },
      { x: 10, y: 2, color: 'tan' },
      { x: 12, y: 2, color: 'tan' },

      { x: 1, y: 3, color: 'tan' },
      { x: 5, y: 3, color: 'tan' },
      { x: 6, y: 3, color: 'red' },
      { x: 7, y: 3, color: 'limeGreen' },
      { x: 8, y: 3, color: 'red' },
      { x: 9, y: 3, color: 'tan' },
      { x: 13, y: 3, color: 'tan' },    

      { x: 0, y: 4, color: 'tan' },
      { x: 3, y: 4, color: 'tan' },
      { x: 5, y: 4, color: 'red' },
      { x: 6, y: 4, color: 'red' },
      { x: 7, y: 4, color: 'limeGreen' },
      { x: 8, y: 4, color: 'red' },
      { x: 9, y: 4, color: 'red' },
      { x: 11, y: 4, color: 'tan' },
      { x: 14, y: 4, color: 'tan' }, 

      { x: 3, y: 5, color: 'tan' },
      { x: 5, y: 5, color: 'limeGreen' },
      { x: 6, y: 5, color: 'limeGreen' },
      { x: 7, y: 5, color: 'limeGreen' },
      { x: 8, y: 5, color: 'limeGreen' },
      { x: 9, y: 5, color: 'limeGreen' },
      { x: 11, y: 5, color: 'tan' },

      { x: 2, y: 6, color: 'tan' },
      { x: 4, y: 6, color: 'tan' },
      { x: 5, y: 6, color: 'limeGreen' },
      { x: 6, y: 6, color: 'limeGreen' },
      { x: 7, y: 6, color: 'red' },
      { x: 8, y: 6, color: 'red' },
      { x: 9, y: 6, color: 'limeGreen' },
      { x: 10, y: 6, color: 'tan' },
      { x: 12, y: 6, color: 'tan' },

      { x: 1, y: 7, color: 'tan' },
      { x: 6, y: 7, color: 'limeGreen' },
      { x: 7, y: 7, color: 'red' },
      { x: 8, y: 7, color: 'limeGreen' },
      { x: 13, y: 7, color: 'tan' },
    ],
  },

  laser: {
    dimensions: [0, 3],
    sprite: [
      { x: 0, y: 0, color: 'red' },
      { x: 0, y: 1, color: 'red' },
      { x: 0, y: 2, color: 'red' },
      { x: 0, y: 3, color: 'red' }
    ]
  }
}

const DIRECTIONS = {
  'LEFT': true,
  'RIGHT': true,
  'UP': true,
  'DOWN': true,
}

