import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import TrainPage from './../TrainPage';
import trains from './routeIds.json';
import './index.css';

class TrainsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    // console.log(this.state);
    // const t = this.state.trains.map(() => {
    //   return 
    // });
    return (
      <div className="container">
        <div className="trainList-container">
          {trains.map((train) => {
            console.log(train);
            const link = `/${train}`;
            return (
              <NavLink activeClassName="trainList-active" className="trainList-routeId" key={train} to={link}>
                {train}
              </NavLink> 
            );
          })}
        </div>
      </div>
    );
  }
}

export default TrainsList;
