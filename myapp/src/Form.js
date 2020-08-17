import React, {Component} from "react";

class Form extends Component {
    state = {
        name: "",
        country: "",
    }

    handleChange = e => {
        this.setState({[e.target.id]:e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addParticipant(this.state);
    }

    render() {
        return(
            <div className="form">
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} />
                    <label htmlFor="country">Country of origin: </label>
                    <input type="text" name="country" id="country" onChange={this.handleChange} />
                    <button id="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;

