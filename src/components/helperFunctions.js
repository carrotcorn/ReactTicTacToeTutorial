export default function calculateWinner(squares) {
   //all the possible winning combinations of tictactoe within on the board
   const lines = [
     [0, 1, 2], //ex.winning across
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6], //ex.winning vertical
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8], //ex. winning diagonally
     [2, 4, 6],
   ];
 
   for (let i = 0; i < lines.length; i++) {
     const [a, b, c] = lines[i];
     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       return squares[a];
     }
   }
   return null
 }