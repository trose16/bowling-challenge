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

  function roll(times, pinsDown) {
    for (var i = 0; i < times; i++) {
      game.roll(pinsDown);
    };
  };
});
