import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};
// // Destructuring Props
const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;

// export default function Square(props) {
//   return (
//     <button className='square' onClick={props.onClick}>
//       {props.boxValue}
//     </button>
//   );
// }

