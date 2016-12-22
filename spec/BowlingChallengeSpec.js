describe ("bowlingChallenge", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame;
  });

  it('has a total of 10 frames', function() {
    expect(game.frames).toEqual(10)
  });

  it('throws an error if you try to play more than 10 frames', function() {
    for(frame = 0; frame < 10; frame++) { game.nextFrame() }
    expect(function() { game.nextFrame()}).toThrowError("You've played 10 frames, start a new game!")
  });

  it('allows you to roll up to two times per frame', function() {
    game.roll()
    game.roll()
    expect(game.frameCounter).toEqual(2)
  });

  it('has a scorecard to keep track of points', function() {
    expect(game.totalScore).toEqual(0)
  });

  // it('selects a random number of pins to fall', function() {
  //   game.roll();
  //   expect(game.roll().pinsHit()).toBeLessThan(11)
  //   expect(game.roll().pinsHit()).toBeGreaterThan(-1)
  // });

  it("can score a gutter ball", function() {
    game.roll(0)
    expect(game.totalScore).toEqual(0)
  });

  it('can score single points', function() {
    game.roll(3);
    game.roll(3);
    game.roll(3);
    roll(17, 0);
    expect(game.score()).toEqual(9)
  });

  it('can score a spare', function() {
    game.roll(1);
    game.roll(9);
    game.roll(3);
    roll(17, 0);
    expect(game.score()).toEqual(16);
  });

  it('can score a strike', function() {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    roll(17, 0);
    expect(game.score()).toEqual(14);
  });

  it('can score a perfect game', function() {
    game.rollTracker = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    expect(game.score()).toEqual(300);
  });

  it('will immediately move to the next frame following a strike', function() {
    game.frameCounter = 1;
    game.roll(10);
    game.ball === 1;
    expect(game.frameCounter).toEqual(2)
  })

  function roll(times, pinsHit) {
    for (var i = 0; i < times; i++) {
      game.roll(pinsHit);
    };
  };

});
