import React, {Component} from "react";

class Main extends Component {
    state = {
        author: "Myself",
    }

    render() {
        return(
            <div className="main">
                <section className="section1">
                    <h2>Main</h2>
                    <h3>Author: {this.state.author}, the great {this.props.name.name}</h3>
                    <p>Participants: <span>{}</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem dolores, repudiandae voluptatum dolorum exercitationem! Nesciunt, molestiae sit dolore maiores nisi iste! Cumque sapiente nobis blanditiis suscipit, ipsa repellat ut.</p>
                </section>
            </div>

        )
    }
}

export default Main;