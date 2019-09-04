import { Board } from './../src/board';
describe('Board', function (){
  it('test if a sudoku board is correct', function() {
    let board = new Board("283716549469532187715849236932657814874123695651498723397285461548361972126974358");
    board.checkBoard();
    expect(board.isOK).toEqual(true);
  });
  it('test if a incorrect sudoku board is detected', function() {
    let board = new Board("123456789234567891345678912456789123567891234678912345789123456891234567912345678");
    board.checkBoard();
    expect(board.isOK).toEqual(false);
  });
});
