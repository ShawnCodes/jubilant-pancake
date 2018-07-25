import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
import Welcome from "./welcome.js";
import Instructions from "./instructions";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Welcome />
        <Instructions />
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
