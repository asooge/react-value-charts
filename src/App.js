import React from 'react';
import './App.css';
import Ticker from './Ticker'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }
  render() {
    return (
      <div>
        <h1>Value Charts</h1>
        <Ticker />
      </div>
    )
  }
}

export default App;
