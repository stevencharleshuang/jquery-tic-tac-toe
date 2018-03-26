// DOM Loaded Check
$(document).ready(() => {
  console.log('jQuery is loaded and ready!');

  /* --Game Coding Prompt-- */

  // **Objective:** Build a tic tac toe game in HTML and JavaScript using jQuery
  // * A user should be able to click on different squares to make a move.
  // * When a square is clicked, there should be visual feedback.
  // * Every click will alternate between being for Player 1 or Player 2.
  // --The visual feedback should indicate whose turn it is.
  // * A cell should not be able to be replayed once marked.
  // * Add a reset button that will clear the contents of the board.
  // * Display a message to indicate which turn is about to be played.
  // * After the necessary moves have been played, stop game and alert the
  //   winner if one player ends up winning with three in a row.
  //     * Hint: Determine a set of winning combinations. Check those
  //       combinations on the board contents after every move.
  /* Static
    // Put entire game into function - playTicTacToe() - onLoad
      // Declare player x and player o
        // Init Board
        // Declare Active Player
        // Check Player turn
      // add event listener to all squares - .on() Click
      // 0 1 2
      // 3 4 5
      // 6 7 8
        // Track with Array, result of click, see if Array index has value
          // Array [0] = check for value if/else
            //  if true, exit func, else - code block. player++, player
          // if player = Player X - .html() or .text() 'X' into div
          // ** even/odd check for player ID
          // if player = Player O - .html() or .text() 'O' into div
          // Update #announcement-box to display current player -
  .html() or .text()
        // Add function checkWin() func to while() argument
          // checkWin() if/else 8 win scenarios and 1 draw default?
          // if (arr[0]==arr[1] && arr[0]==arr[2])...
      // reset button
    // Add event listener to reset button.
      // Reset Button - .on click(),
        // Call game func - reInitArray(), resetDivs()
        // Reset Button - .css
  */
  // Target Entire Game Board div
  let gameBoard = $('#game-board');
  // Board Square Divs - id Array
  let idArr = ['top-left','top-center','top-right','mid-left','mid-center',
              'mid-right','bot-left','bot-center','bot-right'];

  // Put entire game into function - playTicTacToe()
  let playTicTacToe = function(){
    // Board Init Func
    let initBoard = function() {
      // Loop Board Square divs into Game Board
      for (let k = 0, j = 0; k <= 8, j < idArr.length; k++, j++) {
        gameBoard.append($('<div />', {
          'class': 'boardSquare',
          'data-id': [k],
          'id': idArr[j]
        }));
      }
      let turn = 0;
      // Declare Players
      let playerX = 0
      let playerO = 1
      // ID Current Player
      let currentPlayer = playerX;
      // Remove All Square Click Evt Listeners to End Game At Win
      let boardClickSilencer = function () {
        $('.boardSquare').off();
      }
      // Alert Game Winner
      let winnerAlert = function () {
        if (turn % 2 === 0) {
          alert(`Player X wins!`);
        }
        else alert(`Player O wins!`);
      }
      // Check Win Logic
      let checkWin = function(){
        // Player has selected: 0, 1, 2
        if (activeGrid[0] === activeGrid[1] && activeGrid[1] === activeGrid[2]) {
          winnerAlert();
          boardClickSilencer();
        }
        // Player has selected: 3, 4, 5
        else if (activeGrid[3] === activeGrid[4] && activeGrid[4] === activeGrid[5]) {
          winnerAlert();
          boardClickSilencer();
        }
        // Player has selected: 6, 7, 8
        else if (activeGrid[6] === activeGrid[7] && activeGrid[7] === activeGrid[8]) {
          winnerAlert();
          boardClickSilencer();
        }
        // Player has selected: 0, 3, 6
        else if (activeGrid[0] === activeGrid[3] && activeGrid[3] === activeGrid[6]) {
          winnerAlert();
          boardClickSilencer();
        }
        // Player has selected: 1, 4, 7
        else if (activeGrid[1] === activeGrid[4] && activeGrid[4] === activeGrid[7]) {
          winnerAlert();
          boardClickSilencer();
        }
        // Player has selected: 2, 5, 8
        else if (activeGrid[2] === activeGrid[5] && activeGrid[5] === activeGrid[8]) {
          winnerAlert();
          boardClickSilencer();
        }
        // Player has selected: 0, 4, 8
        else if (activeGrid[0] === activeGrid[4] && activeGrid[4] === activeGrid[8]) {
          winnerAlert();
          boardClickSilencer();
        }
        // Player has selected: 2, 4, 6
        else if (activeGrid[2] === activeGrid[4] && activeGrid[4] === activeGrid[6]) {
          winnerAlert();
          boardClickSilencer();
        }
        // It's a draw
        else if (turn===8) {
          alert('It\'s a draw');
          boardClickSilencer();
        }
      }
      // Provide boardSquares
      // let boardSquaresArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      ///////////////////////////////////////////////////
      let activeGrid = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
      console.log(activeGrid)
      //////////////////////////////////////////////
      // On click, ID the boardSquare
      let squareSelection = function(player){
        $('.boardSquare').on('click', function clickActions (){
          for (let i = 0; i<= 8;) {
            // Player X
            if ($(this).data('id')===i && player%2===0) {
              // Update activeGrid Array to Reflect Player At Play
              activeGrid[i] = 'X'
              // On Click, Square Changes Style For Player X
              $(`.boardSquare[data-id=${i}]`).css('background',
                'radial-gradient(circle at 190%, #3f3, #33f 50%, #28e 75%, #333 75%');
              // ...Clicked Square Inputs X
              $(`.boardSquare[data-id=${i}]`).text('X');
              // Call checkWin
              checkWin();
              // Update Announcement Box
              $('#current-player').text(`Player O`)
              // Announcement Box Change Radial Grad
              $(`.announcement-box`).css('background',
                'radial-gradient(#333 10%, #a2a 30%, #222 80%)');
              // ...Remove Clicked Square Event Listener
              $(`.boardSquare[data-id=${i}]`).off();
              // Next Player
              player++;
              // Increase Turn Counter
              turn++;
              // For Testing...
              // console.log('player X clicked', i, currentPlayer);
              // console.log('new array', activeGrid)
              // console.log(turn)
              return i;
            }
            // Player O
            else if ($(this).data('id')===i && player%2===1) {
              // Update activeGrid Array to Reflect Player At Play
              activeGrid[i] = 'O';
              // On Click, Square Changes Style For Player O
              $(`.boardSquare[data-id=${i}]`).css('background',
                'radial-gradient(#333 10%, #a2a 30%, #222 80%)');
              // ...Clicked Square Inputs O
              $(`.boardSquare[data-id=${i}]`).text('O');
              // Call checkWin
              checkWin();
              // Update Announcement Box
              $('#current-player').text(`Player X`)
              // Announcement Box Change Radial Grad
              $(`.announcement-box`).css('background',
                'radial-gradient(circle at 190%, #3f3, #33f 50%, #28e 75%, #333 75%');
              // ...Remove Clicked Square Event Listener
              $(`.boardSquare[data-id=${i}]`).off();
              // Next Player
              player++;
              // Increase Turn Counter
              turn++;
              // For Testing...
              // console.log('player O clicked', i, currentPlayer);
              // console.log('new array', activeGrid)
              // console.log(turn)
              return i;
            }
            else i++;
          }
        });
      }
      // In-Game Function Calls
      squareSelection(currentPlayer);
    // Below } Closes playTicTacToe()
    }
    // Call Board Init
    initBoard();
  // Below } Closes playTicTacToe Func
  }
  // Call game func
  playTicTacToe();
  ////////////////////////////////
  // Target Reset Button
  let resetGame = $('#reset-btn');
  // Reset Game Click Listener
  resetGame.on('click', function(){
    $('.boardSquare').remove();
    $('#current-player').text('Player X')
    $(`.announcement-box`).css('background',
                'radial-gradient(circle at 190%, #3f3, #33f 50%, #28e 75%, #333 75%');
    playTicTacToe();
  });
  /////////////////////////////////
  /* --Bonus

  * Use an HTML form to allow players to enter their names
  * Style it! give it a personal flavor.
  * Check out the website [bitbaloon](https://www.bitballoon.com/) and host
  your game there.

  ## Ultra Bonus
  * We once had a student implement an Artifical Intelligence (AI)
    opponent. If you really need a challenge, write some code that will
    play a game of Tic Tac Toe against you. (Hint: look into the minimax
    algorithm).

  ## Deliverable

  * Everyone's game will look different but you can check out the following
  screenshots to get some basic design ideas.
  */
//////////////////////////////////////////////////
// Below } Closes DOM loaded check - DO NOT REMOVE
});
