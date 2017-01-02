$(document).ready(function() {
  var game = new BowlingGame();


  function gameDisplayUpdate() {
    $('#frame-number').text(game.frameCounter);
    $('#ball-number').text(game.ball + ' Rolling...');
    $('#pins-hit').text(game.autoRoll() + ' Pins!')
    $('#points-tracker').text('Points per frame ' + game.rollTracker + ' - ')
    $('#final-score').text(game.score())
  }

    $('#calculate-score').click(function() {
      game.score();
      gameDisplayUpdate();
    })

    function manualGameDisplayUpdate() {
      $('#manual-frame-number').text(game.frameCounter);
      $('#manual-ball-number').text(game.ball + ' Rolling...');
      $('#manual-pins-hit').text(game.roll() + ' Pins!')
      $('#manual-points-tracker').text('Points per frame ' + game.rollTracker + ' - ')
      $('#final-score').text(game.score())
    }

    $('#submit-score').click(function() {
      game.score();
      manualGameDisplayUpdate();
    })







});
