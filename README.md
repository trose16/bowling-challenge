AutoMode Bowling Game
    • Enables automatic game where number of pins hit are determined randomly
    • Ensures pins hit do not exceed 10 per frame
    • Ensures two balls per frame unless strike
    • Provides correct final score following tenth frame

  Manual Mode Bowling Scorecard
      • Provides digital scorecard for players to record & calculate their score
      • Corrects user if they record more than 10 pins hit per frame
      • Provides two balls per frame unless strike
      • Handles tenth frame bonus rolls for spares/strikes with custom user messages
      • Provides correct final score following tenth frame
      • Game resets so additional rolls are not recorded

  To Play:
    AutoMode
      Via index.html (jquery) interface:
          -Press "roll" and enjoy the magic of bowling
        Via console.log enter:
          game = new BowlingGame
          game.AutoRoll() x 20 (appx to reach 10th frame)
          game.score()
          if you get NAN roll a couple more times and try score() again
    ManualMode
        Via console.log enter:
        game = new BowlingGame
        game.roll(x)
        it will automatically score and end your game upon final frame.


  Troubleshooting
    Auto Roll Mode
        • Tenth frame bonus rolls
        • Custom user messages for strikes and spares
        • Game reset so additional rolls are not recorded following 10th frame

    Manual Mode
        • Jasmine test glitches, two report failure while console.log and feature testing confirms proper usage.
        • JQuery forms I'd like to pass the value entered into my javascript function as the pins argument so the logic works with the html interface.

User Stories
  As a bowler
  So that I can play the sport I love
  I want to be able to start a bowling game

  As a bowler
  So that I know I’m playing an industry standard game
  I want to play 10 frames per game

  As a bowler
  So that I have an opportunity to earn points
  I want to roll my ball and knock down up to 10 pins per frame

  As a bowler
  So that I can earn as many points as possible
  I want to have up to two rolls per frame to knock down my 10 pins

  As a bowler
  So that I can see how I perform during my game
  I want a scorecard that tracks my points

  As a bowler
  So that I can get the highest score possible
  I want to receive a bonus to my scorecard when I roll a strike or spare

  As a bowler
  So that I can receive the highest score possible
  When I roll a strike I want to receive a bonus to my scorecard equal to the amount of pins I knock down in my next two rolls

  As a bowler
  So that I can receive the highest score possible
  When I roll a spare I want to receive a bonus to my scorecard equal to the amount of pins I knock down in the first roll of my next frame

  As a bowler
  If I roll a strike or spare in my 10th frame
  I want to receive up to two bonus rolls
