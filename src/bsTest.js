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
    // line below: if the roll1(i) in the rolls list + the roll2(i+1) in the rolls list is equal to 10, then add 10 to the score + the amount of the roll3(i+2) in the rolls list. i+=2 ensures the new total includes the bonus and the third roll. 
      if(this.rolls[i] + this.rolls[i+1] === 10){
        score += 10 + this.rolls[i+2];
        i+=2;
      } else {
          score += this.rolls[i] + this.rolls[i+1];
          i+=2;
      }
  }
  return score;
};
