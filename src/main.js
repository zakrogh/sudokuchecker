import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Board(input){
  this.board = [];
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
      $("#" + counter).val(this.board[i][j]);
      counter++;
    }
  }
}

Board.prototype.checkBoard = function(){
  const success = "123456789";
  let isOK = true;
  let temp = [];
  //check rows
  for(let i = 0; i < 9; i++){
    temp = [];
    for(let j = 0; j < 9; j++){
      temp.push(this.board[i][j]);
    }

    if(temp.sort().join("") !== success){
      isOK = false;
    }
  }
  //check columns
  for(let i = 0; i < 9; i++){
    temp = [];
    for(let j = 0; j < 9; j++){
      temp.push(this.board[j][i]);
    }
    if(temp.sort().join("") !== success){
      isOK = false;
    }
  }
  console.log(isOK)
}

$(document).ready(function(){
  //var newBoard = new Board("864371259325849761971265843436192587198657432257483916689734125713528694542916378");
  var newBoard = new Board("123456789234567891345678912456789123567891234678912345789123456891234567912345678");

  newBoard.displayBoard();
  newBoard.checkBoard();
  console.log(newBoard);
});
