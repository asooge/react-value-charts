import React from 'react';
import './App.css';
import Ticker from './Ticker'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      financials: {}
    }
  }
  render() {
    return (
      <div>
        <h1>Value Charts</h1>
        <Ticker setApp={this.setState.bind(this)} financials={this.state.financials}/>
      </div>
    )
  }
}

export default App;
