import React from "react";
import ReactDOM from "react-dom/client";

import "./ch04_menu.css";


class MenuItem extends React.Component {
    
    render() {
        return (
            <li className="menu-item">
                <a className="menu-link" href={this.props.href}>
                    {this.props.label}
                </a>
            </li>
        );
    }
}


class Menu extends React.Component {
    
    render() {
        return (
            <nav className="navbar">
                <h1 className="title">TheMenuCompany</h1>
                <ul className="menu">
                    <MenuItem label="Home" href="/" />
                    <MenuItem label="About" href="/about/" />
                    <MenuItem label="Blog" href="/blog" />
                </ul>
            </nav>
        );
    }
}


class App extends React.Component {
    
    render() {

        return (
            <main>
                <Menu />
            </main>
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

