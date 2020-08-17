import React from "react";

const ParticipantsUI = props => {

    const participantsList = props.participants.map((participant, index) => (
        <div key={participant.id} className="cell">
            <p>Participant n. {index + 1} is {participant.name} from {participant.country}</p>
            <button className="removeBtn" onClick={() => props.removeParticipant(participant)}>Remove participant</button>
        </div>));

    return(
        <div className="participantsUI">
            <div className="container">
                {participantsList}
            </div>
        </div>
    )

}

export default ParticipantsUI;