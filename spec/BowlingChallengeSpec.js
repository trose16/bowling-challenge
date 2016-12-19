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

  it('throws an error if you try to play more than 10 frames', function() {
    for(frame = 0; frame < 10; frame++) { game.currentFrame() }
    expect(function() { game.currentFrame()}).toThrowError("You've played 10 frames, start a new game!")
  });


  it('allows you to roll up to two times per frame', function() {

  });

  it('has a scorecard to keep track of points', function() {
    expect(game.score).toEqual(0)
  });


  it("can score a gutter ball", function() {
    game.roll(1, 0)
    expect(game.score).toEqual(0)
  });

  it('can score single points', function() {
    game.roll(1, 3)
    game.roll(1, 3)
    expect(game.score).toEqual(6)
  });

  it('can score a spare', function() {
    game.roll(1, 6)
    game.roll(2, 4)
    game.roll(1, 2)
    expect(game.score).toEqual(12)
  });

  it('can score a strike', function() {
    game.roll(1, 10)
    game.roll(1, 1)
    game.roll(2, 8)
    expect(game.score).toEqual(19)
  });

});
