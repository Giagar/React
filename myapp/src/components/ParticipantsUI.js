import React from "react";

const ParticipantsUI = props => {

    const list = props.participants.map((participant, index) => (<div key={participant.id} className="cell">
        <p>The participant n. {index + 1} is {participant.name} from {participant.country}</p>
        <button className="btn btn-sm btn-outline-danger" onClick={() => props.removeParticipant(participant.id)}>Remove participant</button>
        </div>));

    return(
        <div className="participantsUI">
            <h2>ParticipantsUI</h2>
            <div className="listWrapper">
                {list}
            </div>
        </div>
    )
}

export default ParticipantsUI;