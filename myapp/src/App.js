import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Participants from "./Participants";

class App extends Component {
  state = {
    copyright: {
      name: "Myname",
      year: 2020,
    },
    participants: {
      
    },
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Participants />
        <Footer name={this.state.copyright.name} year={this.state.copyright.year} />
      </div>
    );
  }
}

export default App;
