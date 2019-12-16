import React from 'react'
import axios from 'axios'

class Ticker extends React.Component {
    constructor() {
        super()
        this.state = {
            ticker: null
        }
    }

    handleInput = event => {
        event.persist()
        this.setState({ ticker: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        axios('https://financialmodelingprep.com/api/v3/financials/income-statement/' + this.state.ticker)
            .then(res => {
                console.log(res)
                this.props.setApp({ financials: {...this.props.financials , [res.data.symbol]: res.data.financials}  })
            }
            )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter stock ticker: </label>
                <input onInput={this.handleInput} value={this.state.ticker}></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default Ticker