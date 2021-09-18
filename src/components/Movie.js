import React, { Component } from 'react';
import {
    Card
}from 'react-bootstrap'

 class Movie extends Component {
    render() {
        return (
            <div>
               { 
                (this.props.shoWeatherAndMovie &&  <Card>
                        <Card.Header as="h5">Available Movie</Card.Header>
                        <Card.Body>
                            <Card.Title>Movie for :{this.props.display_location.split(',')[0]}</Card.Title>
                            <Card.Text>
                                {
                                    this.props.movie.map(item => {
                                        return (
                                            <div>
                                                <h5>Current title: {item.title}</h5>
                                                <h5>overview: {item.overview}</h5>
                                                <h5>average_votes: {item.average_votes}</h5>
                                                <h5>total_votes: {item.total_votes}</h5>
                                                <img src={`./${item.image_url}`} alt={`${item.image_url}`}/>
                                                <h5>popularity: {item.popularity}</h5>
                                                <h5>released_on: {item.released_on}</h5>
                                                <h4>************************************************************************************************************************</h4>
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

export default Movie
