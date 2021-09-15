import React, { Component } from 'react';
import {
    Alert
} from 'react-bootstrap'

class ErrorCard extends Component {
    render() {
        return (
            <Alert variant="danger"  >
                <Alert.Heading>"error": "Unable to geocode"</Alert.Heading>
            </Alert>
        )
    }
}
export default ErrorCard
