import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class AppRoute extends Component {
  render() {
    return (
      <App />
    )
  }
}

ReactDOM.render(<AppRoute />, document.getElementById('root'));
registerServiceWorker();
