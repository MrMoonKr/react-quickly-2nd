import React from "react";


class Link extends React.Component {
    
    render() {
        return React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { href: this.props.url },
                `Read more about ${ this.props.framework }`
            )
        );
    }
}


export default Link;
