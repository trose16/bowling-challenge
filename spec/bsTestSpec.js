describe ("bowlingChallenge", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame;
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
    game.rollTracker = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    expect(game.score()).toEqual(300);
  });

  function roll(times, pinsDown) {
    for (var i = 0; i < times; i++) {
      game.roll(pinsDown);
    };
  };
});
