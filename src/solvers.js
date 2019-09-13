/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  solution = new Board({n:n});
  var result = [];

  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      solution.togglePiece(row, col);
        if(solution.hasAnyRooksConflicts()){
          solution.togglePiece(row, col)
        }
    }
  }

    for (var i = 0; i < n; i++) {
      result.push(solution.attributes[i]);
    }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return result;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme array.length
  var newBoard = new Board({n:n});
  // var chessBoard = new Board({n:n});

  // var choices = chess.Board.togglePiece()
  // if n is equal to the amount of rows we created
  // push our array of rows
  var again = function(row) {
    var row = row || 0;
    if(row === n) {
      solutionCount++;
    } else {
       for (var col = 0; col < n; col++) {
         newBoard.togglePiece(row, col);
         if (!newBoard.hasAnyColConflicts()) {
           again(row+1);
        }
        newBoard.togglePiece(row, col);
       }
    }
  }

  again();

  // else iterate through row add rook to first element then access first els


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var newBoard = new Board({n:n});
  // var chessBoard = new Board({n:n});

  // var choices = chess.Board.togglePiece()
  // if n is equal to the amount of rows we created
  // push our array of rows
  var again = function(row) {
    var row = row || 0;
    if(row === n) {
      for(var i = 0; i < n; i++)
      solution.push(newBoard.attributes[i]);
    } else {
       for (var col = 0; col < n; col++) {
         newBoard.togglePiece(row, col);
         if (!newBoard.hasAnyQueensConflicts()) {
           again(row+1);
          }
          newBoard.togglePiece(row, col);
        }
      }
    }

    again();
    //fixme

    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var newBoard = new Board({n:n});
  // var chessBoard = new Board({n:n});

  // var choices = chess.Board.togglePiece()
  // if n is equal to the amount of rows we created
  // push our array of rows
  var again = function(row) {
    var row = row || 0;
    if(row === n) {
      solutionCount++;
    } else {
       for (var col = 0; col < n; col++) {
         newBoard.togglePiece(row, col);
         if (!newBoard.hasAnyQueensConflicts()) {
           again(row+1);
        }
        newBoard.togglePiece(row, col);
       }
    }
  }

  again();
  //fixme
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
