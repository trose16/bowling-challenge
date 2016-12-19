DEFAULT_PINS = 10;

function BowlingGame() {
  this.frames = 10;
  this.playing = true;
  this.frameCounter = 1;
  this.score = 0;
};

BowlingGame.prototype.currentFrame = function(){
  if(this.frameCounter > 10){
    throw new Error("You've played 10 frames, start a new game!")
  }
  this.frameCounter++
};

BowlingGame.prototype.roll = function(times, pinsHit){
  this.score += pinsHit;
// this fx needs to allow 2 rolls unless strike ==10 and add one to the frame counter. Frame counter should stop at 10 and provide final score.
};
