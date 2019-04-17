import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Search from './components/shared/search/Search';
import Comments from './components/shared/comments/Comments';
import { logIn } from './services/auth';

class App extends Component {
  componentWillMount = async () => {
    await logIn('Alex', 'password');
  }
  
  render() {
    return (
      <div className="App">
        <Search />
        <Comments />
      </div>
    );
  }
}

export default App;