import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Location from './components/pages/location/Location';

class App extends Component {  
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/location/:location' component={Location} />
      </Router>
    );
  }
}

export default App;