describe ("bowlingChallenge", function() {

  var game;

  beforeEach(function(){
    game = new BowlingGame;
  });

  it('has a total of 10 frames', function(){
    expect(game.frames).toEqual(10)
  });

});
