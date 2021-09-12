import React, { Component } from 'react'

 class Location extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.display_name}</h1>
                <h1>{this.props.latitude}</h1>
                <h1>{this.props.longitude}</h1>
               


            </div>
        )
    }
}

export default Location
