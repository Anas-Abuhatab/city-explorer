import React, { Component } from 'react';
class BSimg extends Component {
    render() {
        return (
            <div>
                {<img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.latitude},${this.props.longitude}&zoom=1-18`} alt="jhhy" />
                }
            </div>
        )
    }
}

export default BSimg

