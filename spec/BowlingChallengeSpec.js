describe ("bowlingChallenge", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame;
  });

  it('throws an error if you try to play more than 10 frames', function() {
    for(frame = 0; frame < 10; frame++) { game.nextFrame() }
    expect(function() { game.nextFrame()}).toThrowError("You've played 10 frames, start a new game!")
  });

  it('allows you to roll up to two times per frame', function() {
    game.frameCounter = 1
    game.roll(5)
    game.roll(3)
    expect(game.frameCounter).toEqual(2)
  });

  it('has a scorecard to keep track of points', function() {
    game.roll(0)
    roll(19, 0)
    expect(game.score()).toEqual(0)
  });

  it('selects a random number of 10 pins to fall per frame', function() {
    game.autoRoll();
    expect(game.autoRoll()).toBeLessThan(11)
    expect(game.autoRoll()).toBeGreaterThan(-1)
  });

  it("can score a gutter ball", function() {
    game.roll(0)
    roll(19, 0)
    expect(game.score()).toEqual(0)
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
    game.ball === 1;
    game.roll(10);
    expect(game.frameCounter).toEqual(2)
  });

  it('will throw an error if more than 10 pins are hit per frame', function() {
    game.roll(11)
    expect(function() {
      game.frameValidate()
    }).toThrowError("Oops! You can't hit more than 10 pins per frame!")

  });


  function roll(times, pinsHit) {
    for (var i = 0; i < times; i++) {
      game.roll(pinsHit);
    };
  };

});
