import React from "react";

const ParticipantsUI = props => {
    const {name} = props.participants.copyright;
    //console.log(prova)

    return(
        <div>
            <h2>ParticipantsUI</h2>
            <p>Name: {name}</p>
        </div>
    )

}

export default ParticipantsUI;