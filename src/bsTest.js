function BowlingGame() {
  this.rolls = [];
  this.totalScore = 0;
  this.frameCounter = 1;
  this.ball = 1;
};

BowlingGame.prototype.roll = function(pinsDown) {
  this.rolls.push(pinsDown);
};

BowlingGame.prototype.score = function() {
  let calc = 0;
  let i = 0;
  for (var frame = 0; frame < 10; frame++) {
      if (this.isStrike(i)) {
          calc += 10 + this.rolls[i+1] + this.rolls[i+2];
          i++;
      } else if (this.isSpare(i)){
          calc += 10 + this.rolls[i+2];
          i+=2;
      } else {
          calc += this.rolls[i] + this.rolls[i+1];
          i+=2;
      }
  }
  return calc;
  this.totalScore = calc;
};

BowlingGame.prototype.readableScore = function() {
    this.totalScore = this.rolls.reduce(function(a,b){
        return a+b;
      });
  };


BowlingGame.prototype.isSpare = function(i) {
  return this.rolls[i] + this.rolls[i+1] === 10;
  return "Spare ribs baby!";
};

BowlingGame.prototype.isStrike = function(i) {
  return this.rolls[i] === 10;
  return "You're soooo STRIKING!";
};
