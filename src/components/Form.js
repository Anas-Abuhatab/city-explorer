import React, { Component } from 'react';


 class Form extends Component {
    render() {
        
        return (
            <>
            <form onSubmit={this.props.handleSubmit}>
                <input type="text"
                
                        placeholder="Please interr city name"
                        onChange={this.props.handleLocation}
                />

                <input type="submit"
                        value="Explore"
                />
            </form>
           
            </>
        )
    }
}

export default Form
