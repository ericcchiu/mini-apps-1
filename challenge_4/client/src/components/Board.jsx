import React, { Component } from 'react'; 
import SquareList from './SquareList.jsx';

class Board extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      initialBoard: Array(7).fill(null)
    }
  }
  
  // renderSquares(i) { 
  //   return <Square value={i} />
  // }


  render() { 
    const style = {
      display: 'block',
      justifyContent: 'center'
    }

     
    return(
      <div className="Board" style={style}>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
        <div className="row">
          <SquareList initialBoard={this.state.initialBoard} />
        </div>
    </div>
    )
  }

}

export default Board; 