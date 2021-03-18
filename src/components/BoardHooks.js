import React from "react";
import Square from "./SquareHooks";
//Board is a parent of Square
const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);
export default Board;
// export default function Board(props) {
//   return (
//     <div>
//       {props.squares.map((square, i) => (
//         <Square
//           key={props.i}
//           boxValue={props.square}
//           onClick={props.onClick(i)}
//         />
//       ))}
//     </div>
//   );
// }
//   renderSquare(i) {
//     return (
//       <Square
//         boxValue={this.props.squares[i]} //getting prop from Game component parent
//         onClick={() => {
//           this.props.onClick(i); //gets function from Game components to pass down from the Board to the Square, and we’ll have Square call that function when a square is clicked
//         }}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         {/* <div className="status">{status}</div> */}
//         <div className='board-row'>
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares) {
//   //all the possible winning combinations of tictactoe within on the board
//   const lines = [
//     [0, 1, 2], //ex.winning across
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6], //ex.winning vertical
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8], //ex. winning diagonally
//     [2, 4, 6],
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
