import React from "react";
import ReactDOM from "react-dom/client";


class Link extends React.Component {
    
    render() {
        return React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { href: this.props.url },
                `Read more about ${ this.props.framework }`
                //this.props.children
            )
        );
    }
}

class App extends React.Component {
    
    render() {
        
        const link1 = React.createElement( Link, 
            { framework: "React", url: "//react.dev" },
            null );
        
        const link2 = React.createElement( Link, 
            { framework: "Vue", url: "//vuejs.org" },
            null );
        
        const link3 = React.createElement( Link, 
            { framework: "Angular", url: "//angular.io" }, 
            null );

        return React.createElement( React.Fragment, null, link1, link2, link3 );
    }
}

const app = React.createElement( App );


const domElement = document.getElementById("root");

ReactDOM
    .createRoot( domElement )
    .render( app );
