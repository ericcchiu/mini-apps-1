
class App extends React.Component { 
  constructor(props) {
    super(props); 
    this.state = { 
      account: {
        name: '', 
        email: '', 
        password: ''
      },
      address: { 
        line1: '', 
        line2: '', 
        city:'', 
        state:'',
        zip_code:'', 
        phone_number: ''
      }
    }
    this.handleSignup = this.handleSignup.bind(this); 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddAddress = this.handleAddAddress.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
  }

  handleInputChange(event) { 
    const newState = Object.assign({}, this.state.account); 
    newState[event.target.name] = event.target.value;

    this.setState({
      account: newState
    });
  }

  handleAddressInput (event) { 
    const newState = Object.assign({}, this.state.address); 
    newState[event.target.name] = event.target.value;

    this.setState({
      address: newState
    });
  }

  handleSignup(event) { 
    event.preventDefault(); 
    console.log('THIS IS OUR CURRENT STATE!!!!', this.state.account);
  }

  handleAddAddress(event) { 
    event.preventDefault(); 
    console.log('THIS IS OUR CURRENT ADDRESS STATE', this.state.address);
  }

  render() { 
    return (
      <div className="App">
        <h1>Welcome to Multistep Checkout</h1>
        <h2>Does this work?</h2>
        <F1 
          handleSignup={this.handleSignup} 
          handleInputChange={this.handleInputChange} />
          <F2
            handleAddressInput={this.handleAddressInput}
            handleAddAddress={this.handleAddAddress} />
      </div>
    ) 
  }
}


/*** Form 1 Component ***/
const F1 = (props) => { 
  return (
    <div className="Form1">
      <form id="form1">
      <label>User Account:</label>
        <input 
          type="text" 
          name="name"
          placeholder="Enter your name"
          onChange={(event) => props.handleInputChange(event)} />
        <input 
          type="text" 
          name="email"
          placeholder="Enter your email address"
          onChange={(event) => props.handleInputChange(event)} />
        <input 
          type="text" 
          name="password" 
          placeholder="Enter your password"
          onChange={(event) => props.handleInputChange(event)} />
        <button onClick={(event) => props.handleSignup(event)}>Signup</button>
      </form>
    </div>
  )
}

/*** Form 2 ***/
const F2 = (props) => { 
  return (
    <div className="Form2">
      <form>
      <label>Address:</label>
        <input 
          type="text" 
          name="line1"
          placeholder="line1"
          onChange={(event) => props.handleAddressInput(event)} />
        <input 
          type="text"
          name="line2"
          placeholder="line2"
          onChange={(event) => props.handleAddressInput(event)} />
        <input 
          type="text" 
          name="city" 
          placeholder="city"
          onChange={(event) => props.handleAddressInput(event)} />
        <input 
          type="text"
          name="state"
          placeholder="state"
          onChange={(event) => props.handleAddressInput(event)} />
        <input 
          type="text" 
          name="zip_code"
          placeholder="Zip Code"
          onChange={(event) => props.handleAddressInput(event)} />
        <input 
          type="text"
          name="phone_number"
          placeholder="Phone number"
          onChange={(event) => props.handleAddressInput(event)} />
        <button onClick={(event) => props.handleAddAddress(event)}>Submit</button>
      </form>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app')); 
