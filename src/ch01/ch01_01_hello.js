import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";


const reactElement = React.createElement( "h1", null, "Hello World. 안녕하세요" );

const domNode = document.getElementById( 'root' );
const root = ReactDOM.createRoot( domNode );

root.render( reactElement );


// 경고 발생하여 수정
// Waring: You are importing createRoot from 'react-dom' which is not supported. 
// you should import it from 'react-dom/client' instead. 

