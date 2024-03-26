import React from 'react';

import './style.css';

import { DataProvider } from './Context';
import Menu from './Menu';


function App() {

    return ( 
        <DataProvider>
            <header>
                <h1>메뉴</h1>
                <Menu />
            </header>
            <footer>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
                <a href='//reactquickly.dev'>React Quickly 2nd Edition</a>
            </footer>
        </DataProvider>
    ) ;
}

export default App ;