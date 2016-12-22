function BowlingGame() {
  this.frameCounter = 1;
  this.rolls = []
  this.bonusPoints = []
  this.totalScore = 0;
  this.ball = 0;
};

// BowlingGame.prototype.roll = function(pinsDown) {
//   this.rolls.push(pinsDown);
//   this.scoreCalculator();
//   this.ball++
//   if (pinsDown === 10) {
//     return this.bonusCalculator();
//   }
// };

BowlingGame.prototype.roll = function(pinsHit) {
  pinsHit = Math.floor(Math.random() * (11 - 0)) + 0;
  this.rolls.push(pinsHit);
  this.scoreCalculator();
  this.ball++
  if (pinsHit === 10) {
    return this.bonusCalculator();
  }
};

BowlingGame.prototype.scoreCalculator = function() {
  this.totalScore = this.rolls.reduce(function(a,b){
    return a+b;
  });
};

BowlingGame.prototype.bonusCalculator = function() {
  return "This is a strike";
  // this.totalScore = this.rolls.concat(this.bonusPoints);
};
