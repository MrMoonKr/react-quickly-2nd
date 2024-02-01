import React from "react";
import ReactDOM from "react-dom/client";


class Link extends React.Component {
    
    render() {

        return (
            <p>
                <a href={ this.props.url }>
                    Read more about { this.props.framework }
                </a>
            </p>
        );
    }
}

class App extends React.Component {
    
    render() {
        
        return (
            <React.Fragment>
                <Link framework="React" url="//react.dev" />
                <Link framework="Vue" url="//vuejs.org" />
                <Link framework="Angular" url="//angular.io" />
            </React.Fragment>
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

