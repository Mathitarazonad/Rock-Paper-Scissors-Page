# Before thinking on the game itself:

1. Create a menu and select which type of game user wants to play (normal or bonus).
2. Create the necessary components (score bar, rules chart, rock-paper-scissors and bonus buttons).
3. Add styles to the different components.

# Creating the logic of the game:

- Firstly, we need to add an onClick event to every button.
- We need to create a state for the score.
- We want to return from every button their type with a function.
- We get the option from both users and store them in states. Computer will return a random option with a function after the user selected his option.
- We will need a function that compared the two options and returns a winner. Here is where we are going to declare every single scenario that could happen, like Rock beat Scissors and so on.
- After have a winner, the score is going to update. If the user wins, add 1 point to the score, if loses, the score rest 1 point.


# During the game:

- First, we want to display the different options to the players.
- We want to be able to use the rules chart in any moment.
- We want to show the score always.
- User pick an option and wait until the computer randomly picks another.
- We need to show both options.
- Finally, we want to show the result, if user wins or loses and give the option to play again.
- We need to update the score before starting a new game.
- The cycle repeats...
