

function BowlingGame() {
  this.frames = 10;
  this.playing = true;
  this.ball = 1;
  this.frameCounter = 1;
  this.rollTracker = [];
  this.score = 0;
};

BowlingGame.prototype.roll = function(pins){
  this.rollTracker.push(pins);
  this.score += pins;
  this.ball++;
  if ( this.ball > 2) {
    this.nextFrame();
  }
};


//
// BowlingGame.prototype.roll = function(pins){
//   this.rollTracker.push(pins);
//   this.score += pins;
//   this.ball++;
//   if( pins === 10 && this.ball === 2 ) {
//     return this.aStrike();
//   } else if( this.ball > 2) {
//     this.nextFrame();
//   }
// };



BowlingGame.prototype.pinsHit = function(){
    return Math.floor(Math.random() * (11 - 0)) + 0;
};

BowlingGame.prototype.nextFrame = function(){
  this.frameCounter++;
  this.ball = 1;
  if(this.frameCounter > 10){
    throw new Error("You've played 10 frames, start a new game!")
  };
};

BowlingGame.prototype.aSpare = function(index){
    return "Spare Ribs Baby!";
    score += 10 + this.rollTracker[index+2];
    index += 2;
    return score;
    this.nextFrame();
};

BowlingGame.prototype.aStrike = function(){
    return "You're soooo STRIKING!";
    this.nextFrame();
};
