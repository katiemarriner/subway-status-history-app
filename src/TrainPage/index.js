import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trains from './../assets/routeDetail.json';
import './index.css';

class TrainPage extends Component {
  render() {
    const train = trains[this.props.match.params.id];
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