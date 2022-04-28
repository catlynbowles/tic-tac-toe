# Bikini Bottom Tic-Tac-Toe

### Overview of Project:
This project was completed as a part of the Turing Front End Development program. The goal of this project was to create a user friendly, fully functional tic-tac-toe game, with various aspects of functionality.

### Functional Project Goals Achieved:
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

### Reflections on Challenges & Wins:
- The win function was the most difficult to write. It took me several tries, and some strategic planning and researching before I found a method I was satisfied and comfortable with. Through the process, I learned how to utilize .every, which was a new method to me. My initial idea was to change each data type to strings, and use .includes to find exact matches. In the end, this method was not dynamic enough to create a fully functional game and had to be majorly refactored. It was not effective if a player won in 4 or 5 turns.
- On the flip side, this project taught me how to plan and strategically map out my steps before attempting to lay code down. I became much more comfortable with working in my dev tools and running console.logs to test and match different data types, find out if functions were running as I expected, and see if they were saving data as I wanted them to. The best code comes to me when I'm relaxed!
- I challenged myself to complete this project solo unless I was completely stuck. I ended up figuring 95% of it out on my own, which was a huge confidence builder. I have come a long way since week 1!
- It's okay to try some creative ideas that only partially work. I used some new array methods like toString() that weren't quite dynamic enough to achieve the functional goals of the project, but I was proud of my brainstorming and problem solving.

### Code Architecture: 
- This project is composed of several different types of files working together. 
- The index.html is the bones of this project and lays the groundwork for its display and working components. 
- The spongebob theme, colors, and placement of items was accomplished through the styling in styles.css. 
- For this project, several different classes are used to capture new instances of Players and new instance of Game. The game class, where a large portion of the data model is captured, has different properties of a game which include a winning condition, the current players' turn, the two players of the game, and the boxes that have currently been selected. The Player.js file is where the properties of each player are tracked. 
- In the main.js, the DOM is manipulated to update the player grid when the user interacts. Components of event bubbling and delegation were used as the event listener is on the parent only. 
- I attempted to update the data model first, and then the DOM to update the display of the data I wanted.
- All these pieces are working together to display the Bikini Bottom Tic-Tac-Toe!

### To use Locally: 
- Clone this repo
- `cd` into the directory
- Run the command `open index.html` in your terminal

- Deployed link: https://catlynbowles.github.io/tic-tac-toe/

### Languages Used
- HTML
- CSS
- Javascript

### Technolgies Used
- Atom
- Google

### Contributor 

- Catlyn Bowles ([LinkedIn](https://www.linkedin.com/in/catlyn-bowles-a94aa61ab/) || [GitHub](https://github.com/catlynbowles))
