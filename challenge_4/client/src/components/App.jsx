import React, { Component } from 'react'; 
import Scoreboard from './Scoreboard.jsx';
import Board from './Board.jsx';

class App extends Component {
  constructor(props) { 
    super(props); 

  }

  render() {
    return (
      <div className='app'>
        <h1>Welcome to Connect 5</h1>
        <Scoreboard />
        <Board />
      </div>
    )
  }

}

export default App; 

