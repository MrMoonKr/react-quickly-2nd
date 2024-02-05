import React from "react";
import ReactDOM from "react-dom/client";

import "./ch04_menu.css";


function MenuItem( { label, href, target = "_self" } ) {
    
    return (
        <li className="menu-item">
            <a className="menu-link" href={href} target={target}>
                {label}
            </a>
        </li>
    );

}


function Menu() {
    
    return (
        <nav className="navbar">
            <h1 className="title">TheMenuCompany</h1>
            <ul className="menu">
                <MenuItem label="Home" href="/" />
                <MenuItem label="About" href="/about/" />
                <MenuItem label="Blog" href="/blog" target="_blank" />
            </ul>
        </nav>
    );

}


function App() {

    return (
        <main>
            <Menu />
        </main>
    );

}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

