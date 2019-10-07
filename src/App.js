import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      snacks: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/snacks')
      .then(response => response.json())
      .then(data => this.setState({snacks: data.snacks}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Frontend Example</h1>
      </div>
    );
  }
}

export default App;
