import React, { useState } from "react";
import calculateWinner from "./helperFunctions";
import Board from "./BoardHooks";

const styles = {
  width: "200px",
  margin: "20px auto",
};
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current]; //""..."expands an array into a list
    // If user clicks an occupied square or if the game is won, return
    if (winner || squares[i]) {
      return;
    }
    //put an "X" or an "O" in the clicked squares
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    })
  );
  return (
    <div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {console.log(renderMoves)}
        {renderMoves()}
      </div>
    </div>
  );
};
export default Game;