/*
@title: 2048
@author: Luca
@tags: ['puzzle']
@addedOn: 2024-00-00
*/

const player = "p"

const cube2 = '1'
const cube4 = '2'
const cube8 = '3'
const cube16 = '4'
const cube32 = '5'
const cube64 = '6'
const cube128 = '7'
const cube256 = '8'
const cube512 = '9'
const cube1024 = '0'
const cube2048 = 'w'

const cell = 'c'; 
const blackSquare ='b'

setLegend(
  
  [ player, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................` ],
  [ cube2, bitmap`
................
.33333333333333.
.33332222222333.
.33322222222233.
.33222333222233.
.33223333322233.
.33333333222333.
.33333332223333.
.33333322233333.
.33333222333333.
.33332223333333.
.33322233333333.
.33222222222223.
.33222222222223.
.33333333333333.
................` ],
  [ cube4, bitmap`
................
.CCCCCCCCCCCCCC.
.CCCCC22CCCCCCC.
.CCCC22CCCCCCCC.
.CCCC22CCCCCCCC.
.CCC22CCCCCCCCC.
.CCC22CCCCCCCCC.
.CC22CCCCCCCCCC.
.CC22CCCCC22CCC.
.CC2222222222CC.
.CCC222222222CC.
.CCCCCCCCC22CCC.
.CCCCCCCCC22CCC.
.CCCCCCCCC22CCC.
.CCCCCCCCCCCCCC.
................` ],
  [ cube8, bitmap`
................
.77777777777777.
.77772222227777.
.77222222222277.
.77227777772277.
.77227777772277.
.77222222222277.
.77772222227777.
.77222222222277.
.77227777772277.
.77227777772277.
.77227777772277.
.77222222222277.
.77772222227777.
.77777777777777.
................` ],
  [ cube16, bitmap`
................
.55555555555555.
.55522555222255.
.55522552222225.
.52222552255225.
.52222522555555.
.55522522555555.
.55522522555555.
.55522522222255.
.55522522222225.
.55522522255225.
.55522552255225.
.55222252222225.
.55222255222255.
.55555555555555.
................` ],
  [ cube32, bitmap`
................
.66666666666666.
.62222666222266.
.62222262222226.
.66662262266226.
.66662266666226.
.66662266662266.
.62222666622666.
.62222666622666.
.66662266226666.
.66662266226666.
.66662262266666.
.62222262222226.
.62222662222226.
.66666666666666.
................` ],
  [ cube64, bitmap`
................
.FFFFFFFFFFFFFF.
.FF2222FFFF22FF.
.F22222FFFF22FF.
.F22FFFFFF222FF.
.F22FFFFFF22FFF.
.F22FFFFFF22FFF.
.F22FFFFF22FFFF.
.F22222FF22F22F.
.F222222F22222F.
.F22FF22F22222F.
.F22FF22FFFF22F.
.F222222FFFF22F.
.FF2222FFFFF22F.
.FFFFFFFFFFFFFF.
................` ],
  [ cube128, bitmap`
................
.44444444444444.
.44244224442244.
.44242442424424.
.42244442424424.
.44244442424424.
.44244424424424.
.44244424424424.
.44244424442244.
.44244244424424.
.44244244424424.
.44242444424424.
.44242444424424.
.42242222442244.
.44444444444444.
................` ],
  [ cube256, bitmap`
................
.DDDDDDDDDDDDDD.
.DD22DD222D222D.
.D2DD2D2DDD2DDD.
.D2DD2D2DDD2DDD.
.DDDD2D2DDD2DDD.
.DDD2DD22DD2DDD.
.DDD2DDDD2D2DDD.
.DDD2DDDD2D222D.
.DD2DDDDD2D2D2D.
.DD2DDDDD2D2D2D.
.D2DDDDDD2D2D2D.
.D2DDDDDD2D2D2D.
.D2222D22DD222D.
.DDDDDDDDDDDDDD.
................` ],
  [ cube512, bitmap`
................
.88888888888888.
.82228828882288.
.82888828828828.
.82888228828828.
.82888828888828.
.82888828888828.
.82888828888288.
.82288828888288.
.88828828882888.
.88828828882888.
.88828828828888.
.88828828828888.
.82288222822228.
.88888888888888.
................` ],
  [ cube1024, bitmap`
................
.HHHHHHHHHHHHHH.
.HH2H111H22HH1H.
.H22H1H12HH2H1H.
.HH2H1H12HH21HH.
.HH2H1H1HHH21HH.
.HH2H1H1HH2H1HH.
.HH2H1H1HH21HHH.
.HH2H1H1HH21H1H.
.HH2H1H1H2H111H.
.HH2H1H1H2HHH1H.
.HH2H1H12HHHH1H.
.HH2H1H12HHHH1H.
.H2221112222H1H.
.HHHHHHHHHHHHHH.
................` ],
  [ cube2048, bitmap`
................
.99999999999999.
.99291119291119.
.92921919291919.
.92921912991919.
.99921912991919.
.99291912991919.
.99291912921119.
.99291912921119.
.99291919221919.
.99291919921919.
.92991919921919.
.92991919921919.
.92221119921119.
.99999999999999.
................` ],
  [ cell, bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000` ],
  [ blackSquare, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000` ],
)

setSolids([])

let level = 0
const levels = [
  map`
.1..
....
....
....`,
  map`
w...
....
....
...5`
]

setMap(levels[level])

var haslost = false;

onInput("a", () => {
  if(!haslost){
    MoveAll(1);
  }
})

onInput("d", () => {
  if(!haslost){
    MoveAll(2);
  }
})

onInput("w", () => {
  if(!haslost){
    MoveAll(3);
  }
})

onInput("s", () => {
  if(!haslost){
    MoveAll(4);
  }
})

onInput("k", () => {
  if(haslost){
    haslost = false; 
    setMap(levels[0]);
    setBackground(cell);
    clearText();
  }
})


afterInput(() => {
  if(haslost)return;
  if(detectLose()){
      clearText();
      setBackground(blackSquare);
      setMap(levels[1]);
      addText("GAME OVER! :(", { 
        x: 3,
        y: 5,
        color: color`3`
      });
      addText("press k to restart", { 
        x: 1,
        y: 8,
        color: color`3`
      });
  }
  else if(detectWin()){
    clearText();
    setBackground(blackSquare);
      setMap(levels[1]);
      addText("YOU WON!", { 
        x: 3,
        y: 5,
        color: color`6`
      });
      addText("press k to restart", { 
        x: 1,
        y: 8,
        color: color`6`
      });
    }
})

function MoveAll(direction){
  switch(direction){
    case 1: //left
      moveLeft();
      GenerateSquare(1);
      
      break;
    case 2: // right
      moveRight();
      
      break;
    case 3: //up
      moveUp();
      break;
    case 4:
      moveDown();
      break;
    default:
      break;
  }
  
  GenerateSquare(1);
}

function moveLeft() {
  const sprites = getAll();
  
  sprites.forEach(sprite => {
    let newX = sprite.x - 1;

    while (newX >= 0) {
      let nextSprite = getTile(newX, sprite.y)[0];
      if (nextSprite) {
        if (nextSprite.type === sprite.type) {
          nextSprite.type = getNextCubeValue(sprite.type);
          sprite.remove();
        } else {
          break;
        }
      } else {
        sprite.x = newX;
      }

      newX--;
    }
  });

  sprites.forEach(sprite => {
    let newX = sprite.x - 1;
    while (newX >= 0) {
      let nextSprite = getTile(newX, sprite.y)[0];
      if (nextSprite) {
        if (nextSprite.type === sprite.type) {
        } else {
          break;
        }
      } else {
        sprite.x = newX;
      }

      newX--;
    }
  });
}

function moveRight() {
  const sprites = getAll();
  sprites.reverse();
  
  sprites.forEach(sprite => {
    let newX = sprite.x + 1;

    while (newX <= width()) {
      let nextSprite = getTile(newX, sprite.y)[0];
      if (nextSprite) {
        if (nextSprite.type === sprite.type) {
          nextSprite.type = getNextCubeValue(sprite.type);
          sprite.remove();
        } else {
          break;
        }
      } else {
        sprite.x = newX;
      }

      newX++;
    }
  });

  sprites.forEach(sprite => {
    let newX = sprite.x + 1;
    while (newX <= width()) {
      let nextSprite = getTile(newX, sprite.y)[0];
      if (nextSprite) {
        if (nextSprite.type === sprite.type) {
        } else {
          break;
        }
      } else {
        sprite.x = newX;
      }

      newX++;
    }
  });
}

function moveUp() {
  const sprites = getAll();
  
  sprites.forEach(sprite => {
    let newY = sprite.y - 1;

    while (newY >= 0) {
      let nextSprite = getTile(sprite.x, newY)[0];
      if (nextSprite) {
        if (nextSprite.type === sprite.type) {
          nextSprite.type = getNextCubeValue(sprite.type);
          sprite.remove();
        } else {
          break;
        }
      } else {
        sprite.y = newY;
      }

      newY--;
    }
  });

  sprites.forEach(sprite => {
    let newY = sprite.y - 1;
    while (newY >= 0) {
      let nextSprite = getTile(sprite.x, newY)[0];
      if (!nextSprite) {
        sprite.y = newY;
      } else {
        break;
      }

      newY--;
    }
  });
}

function moveDown() {
  const sprites = getAll();
  sprites.reverse();
  
  sprites.forEach(sprite => {
    let newY = sprite.y + 1;

    while (newY <= height()) {
      let nextSprite = getTile(sprite.x, newY)[0];
      if (nextSprite) {
        if (nextSprite.type === sprite.type) {
          nextSprite.type = getNextCubeValue(sprite.type);
          sprite.remove();
        } else {
          break;
        }
      } else {
        sprite.y = newY;
      }

      newY++;
    }
  });

  sprites.forEach(sprite => {
    let newY = sprite.y + 1;
    while (newY <= height()) {
      let nextSprite = getTile(sprite.x, newY)[0];
      if (!nextSprite) {
        sprite.y = newY;
      } else {
        break;
      }

      newY++;
    }
  });
}


function getNextCubeValue(currentValue) {
  switch(currentValue){
    case cube2: 
      return cube4;
    case cube4:
      return cube8;
    case cube8:
      return cube16;
    case cube16:
      return cube32;
    case cube32:
      return cube64;
    case cube64:
      return cube128;
    case cube128:
      return cube256;
    case cube256:
      return cube512;
    case cube512:
      return cube1024
    case cube1024:
      return cube2048;s
    default:
      return cube2048;
  }
}

function checkMatch(direction){
  
}
setBackground(cell);

function GenerateSquare(Amount) {
  let tilesAvailable = 0;
  for (let i = 0; i < Amount; i++) {
    let emptyFound = false;
    for (let j = 0; j < width() * height(); j++) {
      const x = Math.floor(Math.random() * width());
      const y = Math.floor(Math.random() * height());
      
      if (getTile(x, y).length === 0) { 
        addSprite(x, y, cube2);
        emptyFound = true;
        tilesAvailable++;
        break;
      }
    }
    
    if (!emptyFound) {
      break;
    }
  }
}

function detectLose() {
  
  for (let y = 0; y < height(); y++) {
    for (let x = 0; x < width(); x++) {
      const tile = getTile(x, y)[0]; 

      if (!tile) {
        return false;
      }

      if (x < width ()) {
        const rightTile = getTile(x + 1, y)[0];
        if (rightTile && rightTile.type === tile.type) {
          return false;
        }
      }

      if (y < height()) {
        const bottomTile = getTile(x, y + 1)[0];
        if (bottomTile && bottomTile.type === tile.type) {
          return false;
        }
      }
    }
  }

  haslost = true;
  return true;
}

function detectWin() {
  for (let y = 0; y < height(); y++) {
    for (let x = 0; x < width(); x++) {
      const tile = getTile(x, y)[0];

      if (tile && tile.type === cube2048) {
        haslost = true; //i just need to avoid the player to play in the win/lost screen this var do not change that scree if was not clear yet
        return true; // Win detected
      }
    }
  }
  return false;
}
