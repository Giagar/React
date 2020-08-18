import React, { Component } from "react";

class Participants extends Component {
  render() {

    const list = this.props.participants.map((person, index) => <li key={person.id}>The participant n. {index + 1} is {person.name} from {person.country}</li>)

    return (
      <section>
        <h2>Participants</h2>
        <p>Participants description: it is a class component used as a ui component which updates itself everytime the App's state changes</p>
        <div>
            <ul>{list}</ul>
        </div>
      </section>
    );
  }
}

export default Participants;
