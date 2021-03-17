import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      //defined the squares array
      // set the first move to be “X” by default. We can set this default by modifying the initial state in our Board constructor:
      xIsNext: true,
    };
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice(); //call .slice() to create a copy of the squares array to modify instead of modifying the existing array.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        //Unlike the array push() method you might be more familiar with, the concat() method doesn’t mutate the original array, so we prefer it.
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
    }); //this allows the state of the box to be set within the board component class instead of the individual square components(each square is rendered as a component).
    //When the Board’s state changes, the Square components re-render automatically. Keeping the state of all squares in the Board component will allow it to determine the winner in the future.
    // In React terms, the Square components are now controlled components. The Board has full control over them.
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winning is player " + winner;
    } else {
      status = `Next player is ${this.state.xIsNext ? "1" : "2"}`;
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board 
          squares={current.squares}
          onClick={(i)=>this.handleClick(i)}/>
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;

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