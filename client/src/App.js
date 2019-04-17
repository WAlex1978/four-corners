import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Comments from './components/shared/comments/Comments';
import Login from './components/pages/login/Login';

class App extends Component {  
  render() {
    return (
      <Router>
        <Route exact path='/' component={Comments} />
        <Route path='/login' component={Login} />
      </Router>
    );
  }
}

export default App;