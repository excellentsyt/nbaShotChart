import React, { Component } from 'react';
import '../styles/App.css';
import { TopNavBar } from "./TopNavBar"
import { Main } from "./main"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
          <Main className="main"/>
      </div>
    );
  }
}

export default App;
