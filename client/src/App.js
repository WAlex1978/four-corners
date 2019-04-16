import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Search from './components/shared/search/Search';
import Comments from './components/shared/comments/Comments';

class App extends Component {
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