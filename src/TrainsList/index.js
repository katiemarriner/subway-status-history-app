import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import trains from './routeIds.json';
import TrainPage from './../TrainPage';
import './index.css';

class TrainsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.viewDetail = this.viewDetail.bind(this);
  }
  viewDetail(train_id) {
    console.log(train_id);
  }
  render() {
    // console.log(this.state);
    // const t = this.state.trains.map(() => {
    //   return 
    // });
    return (
      <BrowserRouter>
        <div className="trainList-container">
          {trains.map((train) => {
            const link = `/${train.route_id}`;
            return (
              <NavLink activeClassName="trainList-active" className="trainList-routeId" key={train.route_id} to={link}>
                {train.route_id}
              </NavLink> 
            );
          })}
        </div>
      </BrowserRouter>
    );
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default TrainsList;