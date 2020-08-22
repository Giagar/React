import React from "react";

const Contact = props => {
    setTimeout(() => {
        props.history.push("/pagenotworking")
    }, 500);
    
    return(
        <div className="Contact">
            <h1>Contact</h1>
        </div>
    )
}

export default Contact;