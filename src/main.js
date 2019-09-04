import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Board(input){
  this.board = []
  this.input = input.split("");
  let counter = 0;
  for(let i = 0; i < 9; i++){
    let row = [];
    for(let j = 0; j < 9; j++){
      row.push(input[counter]);
      counter++;
    }
    this.board.push(row);
  }
}

Board.prototype.displayBoard = function(){
  let counter = 1;
  for(let i = 0; i < this.board.length;i++){
    for(let j = 0; j < this.board[i].length;j++){
      $("#" + counter).text(this.board[i][j]);
      counter++;
    }
  }
}

$(document).ready(function(){
  var newBoard = new Board("864371259325849761971265843436192587198657432257483916689734125713528694542916378");
  newBoard.displayBoard();
  console.log(newBoard);
});
