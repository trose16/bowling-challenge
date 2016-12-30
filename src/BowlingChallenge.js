function BowlingGame() {
  this.ball = 1;
  this.frameCounter = 1;
  this.frameHolder = [];
  this.rollTracker = [];
};

BowlingGame.prototype.roll = function(pins){
  this.rollTracker.push(pins);
  if ( this.ball === 1 ) {
        this.frameHolder[0] = pins;
        this.ball++;
        return this.frameValidate();
  } else if ( this.ball === 2 ) {
        this.frameHolder[1] = pins;
        return this.frameValidate();
        this.nextFrame();
  }
};

BowlingGame.prototype.autoPinsHit = function(){
  return Math.floor(Math.random() * (11 - 0)) + 0;
};

BowlingGame.prototype.frameValidate = function() {
  validate = this.frameHolder.reduce(function(a,b){
    return a+b;
  });
    if ( validate > 10 ) {
        this.rollTracker.pop();
        this.frameHolder.pop();
        throw new Error("Oops! You can't hit more than 10 pins per frame!");
  } else if ( validate === 10 && this.ball === 1 ) {
        return 'STRIKE';
        this.nextFrame();
  } else if ( validate === 10 && this.ball === 2 ) {
        this.nextFrame();
        return '/';
  } else if ( validate > 10 && this.ball === 2 ) {
        this.nextFrame();
  }
};

BowlingGame.prototype.score = function() {
  let calc = 0;
  let i = 0;
  for (var frame = 0; frame < 10; frame++) {
      if (this.scoreStrike(i)) {
          calc += 10 + this.rollTracker[i+1] + this.rollTracker[i+2];
          i++;
      } else if (this.scoreSpare(i)){
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
  this.frameHolder = [0, 0];
  // if(this.frameCounter > 10 && !){
  //   throw new Error("You've played 10 frames, start a new game!")
  // };
};

BowlingGame.prototype.scoreSpare = function(i) {
  return this.rollTracker[i] + this.rollTracker[i+1] === 10;
};

BowlingGame.prototype.scoreStrike = function(i) {
  return this.rollTracker[i] === 10;
};
