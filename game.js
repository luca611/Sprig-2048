/*
@title: 2048
@author: Luca
@tags: ['puzzle']
@addedOn: 2024-00-00

_______________________________________________________________________

█████████████╗██████╗██╗██████╗     ██████╗ ██████╗██╗  ██╗█████╗ 
██╔════██╔══████╔══██████╔════╝     ╚════████╔═██████║  ████╔══██╗
█████████████╔██████╔████║  ███╗     █████╔██║██╔█████████╚█████╔╝
╚════████╔═══╝██╔══██████║   ██║    ██╔═══╝████╔╝██╚════████╔══██╗
█████████║    ██║  ████╚██████╔╝    ███████╚██████╔╝    ██╚█████╔╝
╚══════╚═╝    ╚═╝  ╚═╚═╝╚═════╝     ╚══════╝╚═════╝     ╚═╝╚════╝ 
_______________________________________________________________________

HOW TO PLAY: 

A -> move all to the left
D -> move all to the right
W -> move all up
S -> move all down

I -> play/Stop music
k -> restart game one finished

---

HOW TO WIN: 
The player must get a block to the value of 2048 to win but it won't be easy!
                                                                  
*/

//player is never used but had to put it for sprig's will
const player = "p"

//all cubes 
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

//other useful or "just fine" objects 
const cell = 'c'; 
const blackSquare ='b'
const TextSpace ='g'
const TextSpaceb ='h'

//really, i'm sorry i'm not a good sound producer for this i let the player stop it. i get it. 
const melody = tune`
135.74660633484163,
135.74660633484163: F5~135.74660633484163,
135.74660633484163: F5~135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163: C5~135.74660633484163,
135.74660633484163,
135.74660633484163: C5~135.74660633484163,
135.74660633484163: C5~135.74660633484163,
135.74660633484163,
135.74660633484163: D5~135.74660633484163,
135.74660633484163: D5~135.74660633484163,
135.74660633484163: D5~135.74660633484163,
135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163: C5~135.74660633484163,
135.74660633484163: B4~135.74660633484163,
135.74660633484163: A4~135.74660633484163,
135.74660633484163: C5~135.74660633484163,
135.74660633484163,
135.74660633484163: B4~135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163: G5~135.74660633484163,
135.74660633484163: D5~135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163: D5~135.74660633484163,
135.74660633484163: E5~135.74660633484163,
135.74660633484163`;
var playbackMelody = playTune(melody, Infinity);

//all textures 
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
.33333333333CCC.
.333322222223CC.
.3332222222223C.
.33222333222233.
.33223333322233.
.33333333222333.
.33333332223333.
.33333322233333.
.33333222333333.
.33332223333333.
.33322233333333.
.C3222222222223.
.CC222222222223.
.CCC33333333333.
................` ],
  [ cube4, bitmap`
................
.CCCCCCCCCCC333.
.CCCCCCCC22CC33.
.CCCCCCC222CCC3.
.CCCCCC222CCCCC.
.CCCCC222CCCCCC.
.CCCC222CC22CCC.
.CCC222CCC22CCC.
.CC222CCCC22CCC.
.CC2222222222CC.
.CC2222222222CC.
.CCCCCCCCC22CCC.
.3CCCCCCCC22CCC.
.33CCCCCCC22CCC.
.333CCCCCCCCCCC.
................` ],
  [ cube8, bitmap`
................
.77777777777555.
.77772222227755.
.77222222222275.
.77227777772277.
.77227777772277.
.77222222222277.
.77772222227777.
.77222222222277.
.77227777772277.
.77227777772277.
.77227777772277.
.57222222222277.
.55772222227777.
.55577777777777.
................` ],
  [ cube16, bitmap`
................
.55555555555777.
.55522555222277.
.55522552222227.
.52222552255225.
.52222522555555.
.55522522555555.
.55522522555555.
.55522522222255.
.55522522222225.
.55522522255225.
.55522552255225.
.75222252222225.
.77222255222255.
.77755555555555.
................` ],
  [ cube32, bitmap`
................
.FFF66666666666.
.FF222666222266.
.F2222262222226.
.66662262266226.
.66662266666226.
.66662266662266.
.62222666622666.
.62222666622666.
.66662266226666.
.66662266226666.
.66662262266666.
.6222226222222F.
.622226622222FF.
.66666666666FFF.
................` ],
  [ cube64, bitmap`
................
.666FFFFFFFFFFF.
.662222FFFF22FF.
.622222FFFF22FF.
.F22FFFFFF222FF.
.F22FFFFFF22FFF.
.F22FFFFFF22FFF.
.F22FFFFF22FFFF.
.F22222FF22F22F.
.F222222F22222F.
.F22FF22F22222F.
.F22FF22FFFF22F.
.F222222FFFF226.
.FF2222FFFFF266.
.FFFFFFFFFFF666.
................` ],
  [ cube128, bitmap`
................
.DDD44444444DDD.
.DD2442244422DD.
.D424244242442D.
.42244442424424.
.44244442424424.
.44244424424424.
.44244424424424.
.44244424442244.
.44244244424424.
.44244244424424.
.44242444424424.
.D424244442442D.
.DD2422224422DD.
.DDD44444444DDD.
................` ],
  [ cube256, bitmap`
................
.444DDDDDDDD444.
.4422DD222D2244.
.42DD2D2DDD2DD4.
.D2DD2D2DDD2DDD.
.DDDD2D2DDD2DDD.
.DDD2DD22DD2DDD.
.DDD2DDDD2D2DDD.
.DDD2DDDD2D222D.
.DD2DDDDD2D2D2D.
.DD2DDDDD2D2D2D.
.D2DDDDDD2D2D2D.
.42DDDDDD2D2D24.
.44222D22DD2244.
.444DDDDDDDD444.
................` ],
  [ cube512, bitmap`
................
.HHH88888888HHH.
.HH2288288822HH.
.H288882882882H.
.82888228828828.
.82888828888828.
.82888828888828.
.82888828888288.
.82288828888288.
.88828828882888.
.88828828882888.
.88828828828888.
.H882882882888H.
.HH2882228222HH.
.HHH88888888HHH.
................` ],
  [ cube1024, bitmap`
................
.888HHHHHHHH888.
.882H111H22HH88.
.822H1H12HH2H18.
.HH2H1H12HH21HH.
.HH2H1H1HHH21HH.
.HH2H1H1HH2H1HH.
.HH2H1H1HH21HHH.
.HH2H1H1HH21H1H.
.HH2H1H1H2H111H.
.HH2H1H1H2HHH1H.
.HH2H1H12HHHH1H.
.8H2H1H12HHHH18.
.88221112222H88.
.888HHHHHHHH888.
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
0LLLL111111LLLL0
L..............L
L..............L
L..............L
L..............L
1..............1
1..............1
1..............1
1..............1
1..............1
1..............1
L..............L
L..............L
L..............L
L..............L
0LLLL111111LLLL0` ],
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
  [ TextSpace, bitmap`
0000000000000000
L000LL0000LL000L
LL0LLLL00LLLL0LL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL` ],
  [ TextSpaceb, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LL0LLLL00LLLL0LL
L000LL0000LL000L
0000000000000000` ],
)

//maps (nothing too difficoult) could actually just generate by code the first block but yeah. 
let level = 0
const levels = [
  map`
.1..
....
....
....`,
  map`
7..1
gggg
hhhh
9..5`
]
setMap(levels[level])

var isAwin = false;
var haslost = false;
var score = 0; 

//cells movement
//--the game must be running for these to work--
//--(yes is considered lost even the win for a easier code nothing changes in the game dw)--
onInput("a", () => {//left
  if(!haslost){
    MoveAll(1);
  }
})

onInput("d", () => {//right
  if(!haslost){
    MoveAll(2);
  }
})

onInput("w", () => {//up
  if(!haslost){
    MoveAll(3);
  }
})

onInput("s", () => {//down
  if(!haslost){
    MoveAll(4);
  }
})

//restart button
//--the game has to be finished for this to work--
onInput("k", () => {
  if(haslost){
    haslost = false; 
    setMap(levels[0]);
    setBackground(cell);
    clearText();
    score = 0; 
    isAwin = false;
  }
})

//music controls 
var isPlaying = true; 
onInput("i", () => {
  if(isPlaying){
    playbackMelody.end();
    isPlaying = false;
    return;
  }

  playbackMelody = playTune(melody, Infinity);
  isPlaying = true;
  isAwin = false; 
})

//after every input check for a win or a lost
afterInput(() => {
  if(haslost)return;
  if(detectLose()){
      clearText();
      setBackground(blackSquare);
      setMap(levels[1]);
      addText("GAME OVER! :(", { 
        x: 3,
        y: 6,
        color: color`3`
      });
      addText("score:"+score, { 
        x: 3,
        y: 8,
        color: color`3`
      });
      addText("k to restart", { 
        x: 3,
        y: 10,
        color: color`C`
      });
  }
  else if(isAwin){
    clearText();
    setBackground(blackSquare);
      setMap(levels[1]);
      addText("YOU WON!", { 
        x: 3,
        y: 6,
        color: color`6`
      });
      addText("score:"+score, { 
        x: 3,
        y: 8,
        color: color`6`
      });
      addText("k to restart", { 
        x: 3,
        y: 10,
        color: color`F`
      });
    }
})

//merge all the movement calls in 1 function (it seemd cleaner do do like so)
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


//all movement function
//quick exlaination (one for all of them)
//1) update to the teoretical next position left right and so on 
//2) check if it's not at the border alr
//3) checks the next tile 
//3.1) is empty -> move
//3.2) is a block -> check merge 
//3.2.1) is the same type -> merge and remove 1 tile
//3.2.2) is another type -> stop
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
          score+=2;
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
          score+=2;
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
          score+=2;
        } else {
          break;
        }
      } else {
        sprite.y = newY;
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
          score+=2;
        } else {
          break;
        }
      } else {
        sprite.y = newY;
      }

      newY++;
    }
  });
}


//function witch tells witch tile is the merged one like 2 n 2 -> 4 easy as that 
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
      isAwin = true; 
      haslost = true; 
      return cube2048;
    default:
      return cube2048;
  }
}

setBackground(cell);

//this just generate (if possible) a 2 cube around the grid (as 2048 is meant to do)
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

//detects if no tiles are avialable and no merges can be done in that case it returns true so i can use to see yet if i lost or not
function detectLose() {
  
  for (let y = 0; y < height(); y++) {
    for (let x = 0; x < width(); x++) {
      const tile = getTile(x, y)[0]; 

      // here i return if i see alr that a tile is free
      if (!tile) {
        return false;
      }

      //here i check for both vertical and horizontal merges
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

