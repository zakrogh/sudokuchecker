import { Board } from './board';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//boards from https://www.kaggle.com/bryanpark/sudoku
$(document).ready(function(){
  // var newBoard = new Board("125498367497136258368725491972864135543917682816352749284679513651283974739541826");
  //var newBoard = new Board("864371259325849761971265843436192587198657432257483916689734125713528694542916378");
  var newBoard = new Board("123456789234567891345678912456789123567891234678912345789123456891234567912345678");

  newBoard.displayBoard();
  newBoard.checkBoard();
  console.log(newBoard);
});
