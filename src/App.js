import { React, Component } from 'react';
import Weather from './components/Weather';
import axios from "axios";
import Form from './components/Form';
import ErrorCard from './components/ErrorCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import BSimg from './components/BSimg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      latitude: "",
      longitude: "",
      showData: false,
      showError: false,
      weatherData: [],
      status: "",
      display_location: "",
      shoWeather:false
    }
  }

  handleLocation = (e) => {
    let display_name = e.target.value;
    this.setState({
      display_name: display_name
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}`
    }
    axios(config).then(res => {
      let responseData = res.data[0]
      this.setState({
        display_location: responseData.display_name,
        longitude: responseData.lon,
        latitude: responseData.lat,
        showData: true,
        status: "",
        showError: false,
        
      });
    })
      .then(() => {
       let city_name=this.state.display_location.split(',')[0];
       console.log(city_name)
        axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?search=${city_name}&lat=${this.state.latitude}&lon=${this.state.longitude}`)
        .then((res) => {
            this.setState({
              weatherData: res.data,
              status: "",
              showError: false,
              shoWeather:true
            })
            
          }).catch(err => {
            console.log(err)
            this.setState({
              status: "error: Something went wrong. Please inter (Amman,Paris,Seattle) for weather info",
              weatherData: [],
              shoWeather:false
            })
          })
      }).catch(err => {
        console.log(err)
        this.setState({
          weatherData: [],
          showError: true,
          shoWeather:false
        })
      })
  }
  render() {
    return (

      <div>
        <h1> City Explorer</h1>
       
        <Form handleSubmit={this.handleSubmit}
          handleLocation={this.handleLocation} />
           {
          this.state.showError && <ErrorCard />
        }
        {this.state.showData &&
          <Weather
          shoWeather={this.state.shoWeather}
            display_location={this.state.display_location}
            latitude={this.state.latitude}
            longitude={this.state.longitude} 
            weatherData={this.state.weatherData}/>
        }
      
        <h2>{this.state.status}</h2>

        <BSimg latitude={this.state.latitude}
          longitude={this.state.longitude} />


      </div>
    )
  }
}

export default App
