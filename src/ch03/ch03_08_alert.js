import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";


class Alert extends React.Component {
    
    render() {
        
        return (
            <p>
                {this.props.isError && "⚠️"}
                {this.props.children}
                {this.props.isError && "⚠️"}
            </p>
        ) ;
    }
}

class App extends React.Component {
    
    render() {

        return (
            <main>
                <Alert>We are almost out of cookies</Alert>
                <Alert isError>We are completely out of ice cream</Alert>
            </main>
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

