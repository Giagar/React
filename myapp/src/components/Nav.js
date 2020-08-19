import React from "react";

const Nav = (props) => {
  const participants = props.participants.map((participant) => (
    <a href="#" key={participant.id}>
      {participant.name}
    </a>
  ));

  return (
    <div className="barnav">
      <h2>Nav</h2>
      <p>
        Nav description: it is a UI Component wich automatically updates when
        the App's state changes
      </p>
      <nav>{participants}</nav>
    </div>
  );
};

export default Nav;
