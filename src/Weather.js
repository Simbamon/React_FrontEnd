import React, { Component } from 'react'
import axios from 'axios'

export default class Weather extends Component {
    constructor() {
        super()
        this.state = {
            weather: "Not yet gotten"
        }
    }
    handleButtonClick = () => {
        axios.get('/getWeatherMinneapolis').then(response => {
            this.setState({
                weather: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get weather in Minneapolis</button>
                <h1>The weather in Minneapolis is: {this.state.weather}</h1>
            </div>
        )
    }
}
