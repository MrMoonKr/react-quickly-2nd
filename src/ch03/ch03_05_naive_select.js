import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";


class Select extends React.Component {
    
    render() {
        
        return (
            <select>
                { this.props.items.map( ( item ) => <option>{ item }</option> ) }
            </select>
        ) ;
    }
}

class App extends React.Component {
    
    render() {

        const items = [ "apples", "pears", "playstations" ];

        return (
            <Select items={ items } />
        );

    }
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

