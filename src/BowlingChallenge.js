function BowlingGame() {
  this.frames = 10;
  this.playing = true;
  this.frameCounter = 1;
  this.ball = 0;
  this.rollTracker = [];
  this.totalScore = 0;
};

BowlingGame.prototype.roll = function(pins){
  this.rollTracker.push(pins);
  this.ball++;
  if( pins === 10 && this.ball === 1 ) {
    this.nextFrame();
    return "You're sooo STRIKING";
  } else if( this.ball > 1) {
    this.nextFrame();
  }
};

BowlingGame.prototype.score = function() {
  let calc = 0;
  let i = 0;
  for (var frame = 0; frame < 10; frame++) {
      if (this.aStrike(i)) {
          calc += 10 + this.rollTracker[i+1] + this.rollTracker[i+2];
          i++;
      } else if (this.aSpare(i)){
          calc += 10 + this.rollTracker[i+2];
          i+=2;
      } else {
          calc += this.rollTracker[i] + this.rollTracker[i+1];
          i+=2;
      }
  }
  return calc;
};

BowlingGame.prototype.nextFrame = function(){
  this.frameCounter++;
  this.ball = 1;
  // if(this.frameCounter > 10){
  //   throw new Error("You've played 10 frames, start a new game!")
  // };
};

BowlingGame.prototype.aSpare = function(i) {
  return this.rollTracker[i] + this.rollTracker[i+1] === 10;
  return "Spare ribs baby!";
};

BowlingGame.prototype.aStrike = function(i) {
  return this.rollTracker[i] === 10;
};
