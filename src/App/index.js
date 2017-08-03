import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style.css';
import TrainsList from './../TrainsList';
import About from './../About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Link to="/"><h2>NYC Subway</h2></Link>
          <Link to="/about">About</Link>
        </div>
        <Route path="/about" component={About} />
        <Route exact path="/" component={TrainsList} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
