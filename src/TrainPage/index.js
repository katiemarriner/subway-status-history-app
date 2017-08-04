import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trains from './routeDetail.json';
import './index.css';

class TrainPage extends Component {
  render() {
    // console.log(this.state);
    // const t = this.state.trains.map(() => {
    //   return 
    // });
    const train = trains[this.props.match.params.id];
    console.log(train);
    return (
      <div className="container">
        <div className="trainPage-id">
          {train.route_short_name}: {train.route_long_name}
        </div>
        <div className="">

        </div>
      </div>
    );
  }
}

export default TrainPage;