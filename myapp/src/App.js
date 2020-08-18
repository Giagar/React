import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Participants from "./components/Participants";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Form from "./components/Form";
import ParticipantsUI from './components/ParticipantsUI';

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

  addParticipant = participant => {
    participant.id = Math.random();
    this.setState({participants: [...this.state.participants, participant]});
    console.log(this.state.participants)
  }

  removeParticipant = participantId => {
    const newList = this.state.participants.filter(participant => participant.id !== participantId);
    this.setState({participants: newList}); 
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <Nav participants={this.state.participants}/>
        <Main name={this.state.copyright}/>
        <Form addParticipant={this.addParticipant} />
        <ParticipantsUI participants={this.state.participants} removeParticipant={this.removeParticipant}/>

        
        {/* <Participants participants={this.state.participants} /> */}
        
        <Footer
          name={this.state.copyright.name}
          year={this.state.copyright.year}
        />
      </div>
    );
  }
}

export default App;
