describe ("bowlingChallenge", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame;
  });

  it('has a total of 10 frames', function() {
    expect(game.frames).toEqual(10)
  });

  it('knows what frame is being played', function() {
    game.frameCounter = 1
    game.roll()
    game.roll()
    expect(game.nextFrame()).toEqual(2)
  });

  it('throws an error if you try to play more than 10 frames', function() {
    for(frame = 0; frame < 10; frame++) { game.nextFrame() }
    expect(function() { game.nextFrame()}).toThrowError("You've played 10 frames, start a new game!")
  });


  it('allows you to roll up to two times per frame', function() {

  });

  it('has a scorecard to keep track of points', function() {
    expect(game.score).toEqual(0)
  });


  it("can score a gutter ball", function() {
    game.roll(0)
    expect(game.score).toEqual(0)
  });

  it('can score single points', function() {
    game.roll(3)
    game.roll(3)
    expect(game.score).toEqual(6)
  });

  it('can score a spare', function() {
    game.roll(6)
    game.roll(4)
    game.roll(2)
    expect(game.score).toEqual(12)
  });

  it('can score a strike', function() {
    game.roll(10)
    game.roll(1)
    game.roll(8)
    expect(game.score).toEqual(19)
  });

});
