import React, { Component, Fragment } from 'react'; 

class Scoreboard extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      Board: {
        Red: 0,
        Black: 0,
        Outcome: 'Tie' 
      }
    }
  }

  render() { 
    return(
      <div className="ScoreBoard">
      <h2>Red: {this.state.Board.Red}</h2>
      <h2>Black: {this.state.Board.Black}</h2> 
      <h2>{this.state.Board.Outcome} !!!</h2>     
      </div>
    )
  }
}

export default Scoreboard;