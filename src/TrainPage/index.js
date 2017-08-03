import React, { Component } from 'react';

class TrainPage extends Component {
  render() {
    // console.log(this.state);
    // const t = this.state.trains.map(() => {
    //   return 
    // });
    console.log(this);
    return (
     <div>{this.props.match.params.id}</div>
    );
  }
}

export default TrainPage;