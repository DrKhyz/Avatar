import React, { Component } from 'react';

const data = {};

class Avatar extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.firstName} {this.props.lastName.toUpperCase()}
        </h1>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default Avatar;
