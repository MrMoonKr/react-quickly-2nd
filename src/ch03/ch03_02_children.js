import React from "react";
import ReactDOM from "react-dom/client";


class Link extends React.Component {
    
    render() {

        return (
            <p>
                <a href={ this.props.url }>
                    { this.props.children }
                </a>
            </p>
        );
    }
}

class App extends React.Component {
    
    render() {
        
        return (
            <React.Fragment>
                <Link url="//react.dev">React ( 리액트 )</Link>
                <Link url="//vuejs.org">Vue ( 뷰 )</Link>
                <Link url="//angular.io">Angular ( 앵귤러 )</Link>
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

