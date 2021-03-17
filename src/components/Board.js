import React from "react";
import Square from "./Square";
//Board is a parent of Square
class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     history: [
  //       {
  //         squares: Array(9).fill(null),
  //       },
  //     ],
  //     //defined the squares array
  //     // set the first move to be “X” by default. We can set this default by modifying the initial state in our Board constructor:
  //     xIsNext: true,
  //   };
  // }

  // //event listener Handle click of the box
  // // moved to game component
  // handleClick(i) {
  //   const squares = this.state.squares.slice(); //call .slice() to create a copy of the squares array to modify instead of modifying the existing array.
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   }); //this allows the state of the box to be set within the board component class instead of the individual square components(each square is rendered as a component).
  //   //When the Board’s state changes, the Square components re-render automatically. Keeping the state of all squares in the Board component will allow it to determine the winner in the future.
  //   // In React terms, the Square components are now controlled components. The Board has full control over them.
  // }

  renderSquare(i) {
    return (
      <Square
        boxValue={this.props.squares[i]} //getting prop from Game component parent
        onClick={() => {
          this.props.onClick(i); //gets function from Game components to pass down from the Board to the Square, and we’ll have Square call that function when a square is clicked
        }}
      />
    ); // modification to have the boards renderSquare method read from the constructor above

    //Each Square will now receive a value prop that will either be 'X', 'O', or null for empty squares.

    //return <Square boxValue={i} />; //box values is the name of the prop being passed down from the Parent Board class to the Child Square class
  }

  render() {
    // const tie = "Tie Game"
    // // transfered into Game component
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = "Winning is player " + winner;
    // } else {
    //   status = `Next player is ${this.state.xIsNext ? "1" : "2"}`;
    // }
    // // try and make validation for tie game
    // const tie = "Tie Game";
    // const winner = calculateWinner(this.state.squares);
    // let statusMsg;
    // if (winner) {
    //   status = "Winning is player " + winner;
    // } else if (!this.state.status) {
    //   // status = `Next player is ${this.state.xIsNext ? "1" : "2"}`;
    //   statusMsg = "Next player is 2";
    //   return statusMsg;
    // } else if (this.state.status) {
    //   statusMsg = "Next player is 1";
    // } else {
    //   return tie;
    // }

    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;

function calculateWinner(squares) {
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
  return null;
}