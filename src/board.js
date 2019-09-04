import $ from 'jquery';
export function Board(input){
  this.board = [];
  this.input = input.split("");
  this.isOK = true;
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
  let temp = [];
  //check rows
  for(let i = 0; i < 9; i++){
    temp = [];
    for(let j = 0; j < 9; j++){
      temp.push(this.board[i][j]);
    }

    if(temp.sort().join("") !== success){
      this.isOK = false;
    }
  }
  //check columns
  for(let i = 0; i < 9; i++){
    temp = [];
    for(let j = 0; j < 9; j++){
      temp.push(this.board[j][i]);
    }
    if(temp.sort().join("") !== success){
      this.isOK = false;
    }
  }
  //check squares
  let x = 0;
  let y = 0;
  for(let k = 0; k < 9; k++){
    if(k > 0 && k % 3 === 0){
      x += 3;
    }
    if(y === 9){
      y = 0;
    }
    temp = [];
    for(let i = y; i < (y + 3); i++){
      for(let j = x; j < (x + 3); j++){
        temp.push(this.board[i][j]);
      }
    }
    console.log(temp);
    if(temp.sort().join("") !== success){
      this.isOK = false;
    }
    y += 3;
  }

  console.log(this.isOK)
}
