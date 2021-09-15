import { React, Component } from 'react';
import Location from './components/Location';
import axios from 'axios';
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
      display_location: ""
    }
  }

  handleLocation = (e) => {
    let display_name = e.target.value;
    this.setState({
      display_name: display_name
    })
    console.log(display_name)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?
      key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}`
    }
    axios(config).then(res => {
      let responseData = res.data[0]
      this.setState({
        display_location: responseData.display_name,
        longitude: responseData.lon,
        latitude: responseData.lat,
        showData: true,
        status: "",
        showError: false

      });
    })
      .then(() => {
        axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?searchQuery=${this.state.display_name}}`)
          .then((res, req) => {

            this.setState({
              weatherData: res.data,
              status: "",
              showError: false
            })
          });
      }).catch(err => {
        this.setState({
          status: "Please inter (Amman,Paris,Seattle) for weather info",
          showError: true
        })
      })
  }
  render() {
    return (

      <div>
        <h1> City Explorer</h1>
        {
          this.state.showError && <ErrorCard />
        }
        <Form handleSubmit={this.handleSubmit}
          handleLocation={this.handleLocation} />
        {this.state.showData &&
          <Location
            display_location={this.state.display_location}
            latitude={this.state.latitude}
            longitude={this.state.longitude} />
        }
        {
          this.state.weatherData.map(item => {
            return (
              <div>
                <h2>{item.date}</h2>
                <h2>{item.description}</h2>
              </div>
            )
          })

        }
        <h2>{this.state.status}</h2>

        <BSimg latitude={this.state.latitude}
          longitude={this.state.longitude} />


      </div>
    )
  }
}

export default App
