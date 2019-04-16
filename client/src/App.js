import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Comments from './components/shared/comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comments />
      </div>
    );
  }
}

export default App;