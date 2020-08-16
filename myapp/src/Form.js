import React, {Component} from "react";

class Form extends Component {
    state = {name: "", country: ""}

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addParticipant(this.state);
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }

    render() {
        return(
            <div className="form">
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={this.handleChange}/>
                    <label htmlFor="country">Country of origin: </label>
                    <input type="text" name="country" id="country" onChange={this.handleChange}/>
                    {/* <input type="submit" value="Submit" id="submit" /> */}
                    <button id="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Form;