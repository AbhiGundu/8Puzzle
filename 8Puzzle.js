
 var board;
var emptyRow;
var emptyCol;

function startGame() {
  board = [    [1, 2, 3],
    [4, 5, 6],
    [7, 8, null]
  ];
  emptyRow = 2;
  emptyCol = 2;
  renderBoard();
}

function renderBoard() {
  var table = document.getElementById("board");
  table.innerHTML = "";
  for (var row = 0; row < 3; row++) {
    var tr = document.createElement("tr");
    for (var col = 0; col < 3; col++) {
      var td = document.createElement("td");
      td.innerHTML = board[row][col] || "";
      if (board[row][col] === null) {
        td.classList.add("empty");
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function shuffle() {
  for (var i = 0; i < 1000; i++) {
    var neighbors = getNeighbors(emptyRow, emptyCol);
    var randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
    swap(emptyRow, emptyCol, randomNeighbor[0], randomNeighbor[1]);
    emptyRow = randomNeighbor[0];
    emptyCol = randomNeighbor[1];
  }
  renderBoard();
}

function getNeighbors(row, col) {
  var neighbors = [];
  if (row > 0) {
    neighbors.push([row - 1, col]);
  }
  if (row < 2) {
    neighbors.push([row + 1, col]);
  }
  if (col > 0) {
    neighbors.push([row, col - 1]);
  }
  if (col < 2) {
    neighbors.push([row, col + 1]);
  }
  return neighbors;
}

function swap(row1, col1, row2, col2) {
  var temp = board[row1][col1];
  board[row1][col1] = board[row2][col2];
  board[row2][col2] = temp;
}

function solve() {
  alert("Solving...");
  // Implement the A* algorithm or any other algorithm to solve the puzzle
}

startGame();
