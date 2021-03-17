import React from "react";

//FUNCTION COMPONENTS
//with function components, dont need to use "this"
//When we modified the Square to be a function component, we also changed onClick={() => this.props.onClick()} to a shorter onClick={props.onClick} (note the lack of parentheses on both sides).
function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.boxValue}
    </button>
  );
}

// CLASS COMPONENT
// class Square extends React.Component {
//   // constructor(props) {
//   //   super(props); //super keyword accesses functions form an objects parent, hence the Board Class
//   //   this.state = {boxValue: null };
//   // }
//   //got rid of constructor because class Square no longer keeps track of the games state.
//   render() {
//     return (
//       <button
//         className='square'
//         onClick={() => {
//           this.props.onClick(); //this onClick prop is specified by the Class Board
//           //Since the Class Board passed onClick={() => this.handleClick(i)} to Square, the Class Square calls this.handleClick(i) when clicked.
//         }}
//       >
//         {this.props.boxValue}
//         {/* shows the boxVal;ue prop defined in the parent class Board  */}
//       </button>
//     );
//   }
// }
export default Square;
