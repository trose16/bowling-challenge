$(document).ready(function() {
  var game = new BowlingGame();


  function gameDisplayUpdate() {
    $('#frame-number').text(game.frameCounter);
    $('#ball-number').text(game.ball + ' Roll!');
    $('#pins-hit').text(game.autoRoll() + ' Pins!')
    $('#points-tracker').text(game.rollTracker + ' - ')
    $('#final-score').text(game.score())
  }


    $('#auto-pins-hit').click(function() {
      game.autoRoll();
      gameDisplayUpdate();
    })

    $('#calculate-score').click(function() {
      game.score();
      gameDisplayUpdate();
    })




});
