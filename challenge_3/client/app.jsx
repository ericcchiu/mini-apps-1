import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 

class App extends Component { 
  constructor(props) {
    super(props); 
    this.state = { 

    }
  }

  render() { 
    return (
      <div className="App">
        <h1>Welcome to Multistep Checkout</h1>
        
      </div>
    ) 
  }
}



ReactDOM.render(<App />, document.getElementById('app')); 
