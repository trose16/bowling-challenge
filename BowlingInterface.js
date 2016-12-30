$(document).ready(function() {
  var game = new BowlingGame();


  function gameDisplayUpdate() {
    $('#frame-number').text(game.frameCounter);
    $('#ball-number').text(game.ball + ' Roll!');
    $('#pins-hit').text(game.autoPinsHit() + ' Pins!')
  }


    $('#auto-pins-hit').click(function() {
      game.autoPinsHit();
      gameDisplayUpdate();
    })


});
