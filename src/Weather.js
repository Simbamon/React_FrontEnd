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
            exampler: "",
            imageSrc: '',
            imageAlt: ''
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
            navigator.geolocation.getCurrentPosition(async position => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                })
            })
        }
        else{
            console.log('geolocation not available')
        }
    }

    getData = async () => {
        const response = await fetch('/api')
        const data = await response.json()
        console.log("Data")
        console.log(data)
    }
    

    fetchexample = async () => {
        const data = { username: "Nice", password: "cool"}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('/api', options)
        const json = await response.json()
        console.log(json)
        this.setState({
            exampler: json.username
        })
        console.log(this.state.exampler)
    }

    handleChange = (e) => {
        const countryCode = e.target.value
        console.log(countryCode)
        this.setState({
            imageSrc:'https://flagpedia.net/data/flags/h80/'+countryCode+'.webp',
            imageAlt:countryCode
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get weather in Minneapolis</button>
                <br />
                <button onClick={this.handleButtonClick2}>Get name</button>
                <br />
                <button onClick={this.geolocation}>Get geo</button>
                <br />
                <button onClick={this.getData}>Get Data</button>
                <br />
                <button onClick={this.fetchexample}>Fetch</button>
                <h1>The weather in Minneapolis is: {this.state.weather}</h1>
                <h1>My name is: {this.state.name}</h1>
                <h1>Lat: {this.state.lat}</h1>
                <h1>Long: {this.state.long}</h1>
                <h1>Fetch: {this.state.exampler}</h1>
                <div>  
                    <select id="country" onChange={this.handleChange}>  
                    <option value="in">India</option>  
                    <option value="us">US</option>  
                    <option value="gb">UK</option>  
                    </select>  


                    <div class="image">  
                        <img src={this.state.imageSrc} id="img-change" alt={this.state.imageAlt}/>  
                    </div>  
                </div>  
            </div>
            
            
        )
    }
}
