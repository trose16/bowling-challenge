
function BowlingGame() {
  this.frames = 10;
  this.playing = true;
  this.frameCounter = 1;
  this.score = 0;
};

BowlingGame.prototype.currentFrame = function(){
  return this.frameCounter
};

BowlingGame.prototype.roll = function(hitPins){

};
