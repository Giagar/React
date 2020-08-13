import React, {Component} from "react";

class Footer extends Component {
    render() {
        const {name, year} = this.props;
        return(
            <div>
                <footer>
                    <p>Info about copyright: {name}, {year}</p>
                    <p>Various links</p>
                </footer>
            </div>
        )
    }
}

export default Footer;