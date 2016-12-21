function BowlingGame() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pinsDown) {
  this.rolls.push(pinsDown);
};

BowlingGame.prototype.score = function() {
  let score = 0;
  let i = 0;
  for (var frame = 0; frame < 10; frame++) {
      if (this.isStrike(i)) {
          score += 10 + this.rolls[i+1] + this.rolls[i+2];
          i++;
      } else if (this.isSpare(i)){
          score += 10 + this.rolls[i+2];
          i+=2;
      } else {
          score += this.rolls[i] + this.rolls[i+1];
          i+=2;
      }
  }
  return score;
};

BowlingGame.prototype.isSpare = function(i) {
  return this.rolls[i] + this.rolls[i+1] === 10;
};

BowlingGame.prototype.isStrike = function(i) {
  return this.rolls[i] === 10;
};
