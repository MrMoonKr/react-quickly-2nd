import React from "react";
import ReactDOM from "react-dom";


const element = React.createElement( "h1", null, "Hello world!!!" );

const container = document.getElementById( 'root' );

ReactDOM.render( element, container );

