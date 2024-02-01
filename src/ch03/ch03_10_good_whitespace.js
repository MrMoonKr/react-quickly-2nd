import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";


class App extends React.Component {
    
    render() {

        return (
            <h1>
                All <em>corgis</em> are awesome
            </h1>
        ) ;

    }
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

