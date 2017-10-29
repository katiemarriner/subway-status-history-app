import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import './style.css';
import trains from './../assets/routeIds.json';
import TrainsList from './../TrainsList';
import TrainPage from './../TrainPage';
import About from './../About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="app-header">
          <div className="container">
            <NavLink activeClassName="app-active" className="app-link" to="/">Index</NavLink>
            <NavLink activeClassName="app-active" className="app-link" to="/about">About</NavLink>
          </div>
        </div>
        <div className="app-body">
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={TrainsList} />
            <Route exact path="/:id" component={TrainPage} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

// <Route path="/:id" component={TrainPage} />
