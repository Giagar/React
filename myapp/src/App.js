import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Participants from "./Participants";
import ParticipantsUI from "./ParticipantsUI";

class App extends Component {
  state = {
    prova: "provaok",
    copyright: {
      name: "Myname",
      year: 2020,
    },
    participants: [
      { name: "Person1", country: "Italy", id:1 },
      { name: "Person2", country: "France", id:2 },
      { name: "Person3", country: "The UK", id:3 },
      { name: "Person4", country: "Spain", id:4 },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Participants participants={this.state.participants} />
        <ParticipantsUI participants={this.state} />
        <Footer
          name={this.state.copyright.name}
          year={this.state.copyright.year}
        />
      </div>
    );
  }
}

export default App;
