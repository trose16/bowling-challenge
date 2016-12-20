

function BowlingGame() {
  this.frames = 10;
  this.playing = true;
  this.ball = 1;
  this.frameCounter = 1;
  this.score = 0;
};

BowlingGame.prototype.roll = function(pinsHit){
  this.score += pinsHit;
  this.ball++
  if( this.ball > 2 ) {
    this.frameCounter++;
    this.ball = 1;
  };
};

BowlingGame.prototype.pinsHit = function(){
    return Math.floor(Math.random() * (11 - 0)) + 0;
};

// BowlingGame.prototype.nextFrame = function(){
//   this.frameCounter++;
//   this.ball = 1;
//   if(this.frameCounter > 10){
//     throw new Error("You've played 10 frames, start a new game!")
//   };
// };
