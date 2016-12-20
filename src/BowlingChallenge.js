DEFAULT_PINS = 10;

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
    this.nextFrame;
  };
};

BowlingGame.prototype.nextFrame = function(){
  this.frameCounter++;
  this.ball = 1;
  if(this.frameCounter > 10){
    throw new Error("You've played 10 frames, start a new game!")
  };
};

// BowlingGame.prototype.nextFrame = function(){
//   this.frameCounter++;
//   this.ball = 1;
//   if(this.frameCounter > 10){
//     throw new Error("You've played 10 frames, start a new game!")
//   };
// };


// BowlingGame.prototype.roll = function(times=1, pinsHit){
//   this.score += pinsHit;
//   this.times++
//   this.firstRoll = false;
//   if( this.times > 1 ) {
//     return 'next frame';
//   }
// };
