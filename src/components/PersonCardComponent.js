import React, { Component } from 'react';

class PersonCardComponent extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.lastname}, {this.props.firstname} </h2>
                <p>Age: {this.props.age}</p>
                <p>Hair: {this.props.haircolor}</p>
            </div>
        );
    }
}

export default PersonCardComponent;