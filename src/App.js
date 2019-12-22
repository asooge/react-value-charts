import React from 'react';
import './App.css';
import Ticker from './Ticker'
import { Bar } from 'react-chartjs-2'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      financials: {},
      show: null
    }
  }
  render() {
    return (
      <div>
        <h1>Value Charts</h1>
        <Ticker setApp={this.setState.bind(this)} financials={this.state.financials}/>
        <Bar
          data={{
            labels: [1,2,3,4],
            datasets: [{
              label: 'net income',
              data: [1,2,3,4],
              backgroundColor: 'black',
            }, {
              label: 'gross profit',
              data: [2,4,6,8],
              backgroundColor: 'tan',
            }, {
              label: 'revenue',
              data: [10, 11, 20, 22],
              backgroundColor: 'green'
            }]
          }}
          options = {{
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [
                {
                  stacked: false,
                  ticks: { beginAtZero: true }
                }
              ]}
          }}
        />
      </div>
    )
  }
}

export default App;
