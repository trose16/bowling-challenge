describe ("bowlingChallenge", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame;
  });

  it('has a total of 10 frames', function() {
    expect(game.frames).toEqual(10)
  });

  it('knows what frame is being played', function() {
    expect(game.currentFrame()).toEqual(1)
  });

  it('has a scorecard to keep track of points', function() {
    expect(game.score).toEqual(0)
  });

  it("can score a gutter ball", function() {
    game.roll(0)
    expect(game.score).toEqual(0)
  });

});
