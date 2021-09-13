import React, { Component } from 'react';
import Location from './components/Location';
import axios from 'axios';
import Form from './components/Form';
import ErrorCard from './components/ErrorCard';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      latitude: "",
      longitude: "",
      showData: false,
      showError: false,

    }
  }
  handleLocation = (e) => {

    let display_name = e.target.value;


    this.setState({
      display_name: display_name

    })
  }
  handleCloce = (e) => {
    this.setState = ({
      showError: false
    })
    console.log('object')
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
        display_name: responseData.display_name,
        longitude: responseData.lon,
        latitude: responseData.lat,
        showData: true,
      });

    }).catch(error => {
        
        if (error.response) {
        return this.setState({
          showError: true
          });
      }
    });
  }





  render() {
    return (
      <>
        <Form handleSubmit={this.handleSubmit}
          handleLocation={this.handleLocation} />
        {this.state.showData &&
          <Location display_name={this.state.display_name}
            latitude={this.state.latitude}
            longitude={this.state.longitude} />
        }

        <img src={`https://maps.locationiq.com/v3/staticmap?
        key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}
        &center=${this.state.latitude},${this.state.longitude}&zoom=1-18`} alt="jhhy" />


        <ErrorCard
          showError={this.state.showError}
          handleCloce={this.handleCloce}
        />
      </>
    )
  }
}

export default App
