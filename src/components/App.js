import React, { Component } from 'react';
import '../styles/App.css';
import { TopNavBar } from "./TopNavBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
      </div>
    );
  }
}

export default App;
