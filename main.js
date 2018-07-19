var currentPlayer = "X";
var nextPlayer = "O";
var playerSelections;
var playerXSelections = new Array();
var playerOSelections = new Array();
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
  
  handleClick = function(event) {
    var cell = event.target
    console.log(cell.id);
  }
  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }
  handleClick = function(event) {
    var cell = event.target;
  
    cell.innerHTML = currentPlayer;
  
    if(currentPlayer === "X" ) {
      playerSelections = playerXSelections;
      nextPlayer = "O";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
    }
    
    
    playerSelections.push(parseInt(cell.id));

    if(checkWin(playerSelections)){
      alert(currentPlayer + " Wins!")
    }
    else if(playerOSelections.length + playerXSelections.length >= 9){
      alert("Draw!")
    }

  
  
    // Swap players
    currentPlayer = nextPlayer;
    
 }

 function checkWin(playerSelections){
   console.log(playerSelections)
  for (var combo = 0; combo < winningCombinations.length; combo++){
    var matches = 0;
        for (var i = 0; i < winningCombinations[combo].length; i++) {
            if (playerSelections.includes(winningCombinations[combo][i])) {
                matches++;
            }
 
            if(matches == 3)
                return true;
        }
    }
    return false;
 }
  hh
  
