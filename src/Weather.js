import React, { Component } from 'react'
import axios from 'axios'

export default class Weather extends Component {
    constructor() {
        super()
        this.state = {
            weather: "Not yet gotten",
            name: "Not yet gotten",
            lat: "",
            long: "",
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

    geolocation = () => {
        if('geolocation' in navigator) {
            console.log('geolocation available')
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                })
                console.log(this.state.lat)
                console.log(this.state.long)

            })
        }
        else{
            console.log('geolocation not available')
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get weather in Minneapolis</button>
                <br />
                <button onClick={this.handleButtonClick2}>Get name</button>
                <br />
                <button onClick={this.geolocation}>Get geo</button>
                <h1>The weather in Minneapolis is: {this.state.weather}</h1>
                <h1>My name is: {this.state.name}</h1>
                <h1>Lat: {this.state.lat}</h1>
                <h1>Long: {this.state.long}</h1>
            </div>
        )
    }
}
