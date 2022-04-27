# Bikini Bottom Tic-Tac-Toe

This project was completed as a part of the Turing Front End Development program. The goal of this project was to create a user friendly, fully functional tic-tac-toe game, with various aspects of functionality: 

1. Players alternate turns. The current player's turn is diplayed in a banner at the top of the screen. Each game will start with a different player than the previous game. 
2. When a player selects a box on the grid, no other player can select that box. If they attempt to, an error message will pop up. 
3. When a player wins, a chain of events occur. The grid becomes unclickable, the banner declares the winner, the player's wins increase by 1, and a new game loads automatically. The player's wins are displayed in their column. 
4. If the result of the game is a draw, the grid will become unclickable, the banner will declare a draw, and the game will automatically reload in about three seconds. 
5. Wins will  be tracked until the page is refreshed. 

## What Does it Look Like? 

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/98493391/165346709-f007cce6-9949-487e-b0bf-9e7ed12781dd.gif)

- This spongebob themed game uses icon displays on the inner grid to track wins and player moves. Each player has their own column, which tracks their wins. The banner communicates significant events in the game. 

### Future Features: 
- Allow user to select character upon game start.
- Save mini grids of previous games.
- Pop up screen when win is declared. 

### Challenges & Wins:
- The win function was the most difficult to write. It took me several tries, and some strategic planning and researching before I found a method I was satisfied and comfortable with. Through the process, I learned how to utilize .every and .includes, which I'm sure will become useful later down the road, as well. 
- On the flip side, this project taught me how to plan and strategically map out my steps before attempting to lay code down. I have realized the importance of a cool head when writing code ! It's also okay to try some creative ideas that only partially work. I used some new array methods like toString() that weren't quite dynamic enough to achieve the functional goals of the project, but I was proud of my brainstorming and creative idea! 

### Code Architecture: 
- This project is composed of several different types of files working together. The index.html, from where the project is accessed, is the bones of this project and lays the groundwork for its display and working components. The spongebob theme, colors, and placement of items was accomplished through the styling in styles.css. For this project, several different classes are used to capture new instances of Players and new instance of Game. My game class, where the data model is captured, has different properties of a game which includes a winning condition, the current players' turn, the two players of the game, and the boxes that have currently been selected. In the main.js, where the DOM selects what is displayed to the user, 

### To use Locally: 
- Clone this repo
- `cd` into the directory
- Run the command `open index.html` in your terminal

### Languages Used
- HTML
- CSS
- Javascript

### Contributor 

- Catlyn Bowles ([LinkedIn](https://www.linkedin.com/in/catlyn-bowles-a94aa61ab/) || [GitHub](https://github.com/catlynbowles))
