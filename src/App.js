import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* tip: add some more green colors like spotify/my share music button */}
        <Layout />
      </div>
    );
  }
}

export default App;
