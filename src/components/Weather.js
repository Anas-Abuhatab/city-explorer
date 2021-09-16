import React, { Component } from 'react';
import {
    Card,

} from 'react-bootstrap';

class Weather extends Component {


    render() {
        return (
            <div>

                
                <Card>
                    <Card.Header as="h5">Location Info</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.display_location}</Card.Title>
                        <Card.Text>
                            latitude: {this.props.latitude} longitude: {this.props.longitude}
                        </Card.Text>

                    </Card.Body>
                </Card>
    
                {   
                  console.log(this.props.shoWeather),
              (this.props.shoWeather &&  <Card>
                        <Card.Header as="h5">Weather Info</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.props.display_location.split(',')[0]}</Card.Title>
                            <Card.Text>
                                {
                                    this.props.weatherData.map(item => {
                                        return (
                                            <div>
                                                <h2>{item.data}</h2>
                                                <h2>{item.description}</h2>
                                                <h4>*******************</h4>
                                            </div>
                                        )
                                    })

                                }
                            </Card.Text>

                        </Card.Body>
                    </Card>)
    }
            </div>
                            
        )
        
    }
}

export default Weather
