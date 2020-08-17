import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Participants from "./Participants";
import Nav from "./Nav";
import Main from "./Main";
import Form from "./Form";
import ParticipantsUI from './ParticipantsUI';

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
