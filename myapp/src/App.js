import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Form from "./components/Form";
import ParticipantsUI from "./components/ParticipantsUI";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    prova: "provaok",
    copyright: {
      name: "Myname",
      year: 2020,
    },
    participants: [
      { name: "Person1", country: "Italy", id: 1 },
      { name: "Person2", country: "France", id: 2 },
      { name: "Person3", country: "The UK", id: 3 },
      { name: "Person4", country: "Spain", id: 4 },
    ],
  };

  addParticipant = (participant) => {
    participant.id = Math.random();
    this.setState({ participants: [...this.state.participants, participant] });
    console.log(this.state.participants);
  };

  removeParticipant = (participantId) => {
    const newList = this.state.participants.filter(
      (participant) => participant.id !== participantId
    );
    this.setState({ participants: newList });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav participants={this.state.participants} />
          <Navbar />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Main name={this.state.copyright} />
          <Form addParticipant={this.addParticipant} />
          <ParticipantsUI
            participants={this.state.participants}
            removeParticipant={this.removeParticipant}
          />
          <Footer
            name={this.state.copyright.name}
            year={this.state.copyright.year}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
