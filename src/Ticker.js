import React from 'react'

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