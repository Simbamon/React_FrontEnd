import React, { Component } from 'react'
import axios from 'axios'

export default class Weather extends Component {
    constructor() {
        super()
        this.state = {
            weather: "Not yet gotten",
            name: "Not yet gotten"
        }
    }
    handleButtonClick = () => {
        axios.get('/getWeatherMinneapolis').then(response => {
            this.setState({
                weather: response.data
            })
        })
    }

    handleButtonClick2 = () => {
        axios.get('/getname').then(response => {
            this.setState({
                name: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get weather in Minneapolis</button>
                <br />
                <button onClick={this.handleButtonClick2}>Get name</button>
                <h1>The weather in Minneapolis is: {this.state.weather}</h1>
                <h1>My name is: {this.state.name}</h1>
            </div>
        )
    }
}
