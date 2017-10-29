import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import TrainPage from './../TrainPage';
import trains from './../assets/routeMeta.json';
import './index.css';

const TrainsListRow = (props) => {
    const train = props.trainArr;
    return (
        <div className="">
            <span>{train.route_short_name}</span> <span>{train.route_long_name}</span>
        </div>
    )
}

class TrainsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div className="container">
        <div className="trainList-container">
          {trains.map((train) => {
            const link = `/${train.route_id}`;
            return (
                <div className="trainList-row" key={`${train.route_id}-row`}>
                  <NavLink activeClassName="trainList-active" className="trainList-routeId" key={train.route_id} to={link}>
                    <TrainsListRow trainArr={train} />
                  </NavLink>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TrainsList;
