import React from "react";
import Board from "./components/Board";
import Square from "./components/Square";
import Game from "./components/Game";

//not being used
function App() {
  console.log("hello tic tac toe");
  return (
    <div className='App'>
      <Square />
      <Board />
      <Game />
    </div>
  );
}

export default App;
