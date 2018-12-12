import React, { Component } from 'react';
import $ from 'jquery';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount() {

  }

  handleInputChange(event) {

    console.log('State was changed by input')
    const newState = Object.assign({}, this.state);
    newState['jsonData'] = event.target.value;

    this.setState(newState);
  }

  handleSubmit(event) {
    // POST request to server route 
    console.log('wasclicked!!!!');
    event.preventDefault();
    $.post('/convert', this.state)
      .done(() => {
        console.log('Post was successful!')
      })
      .fail((err) => {
        console.log('Err making a post request to server');
      })
  }

  render() {
    return (
      <div className="App">
        <h1>JSON/CSV Converter</h1>
        <Form
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />

      </div>
    )
  }
}

export default App;

