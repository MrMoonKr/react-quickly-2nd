import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

/**
 * JSX 형태의 문법의 사용을 위해서는 Webpack 설정이 필요하다.
 * 
 * $ npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
 * 
 * webpack.config.js에서 babel loader를 추가해야 한다.
 * {
 *    test: /\.js$/
 *    exclude: /node_modules/,
 *    use: {
 *      loader: 'babel-loader',
 *      options: {
 *        presets: [ '@babel/preset-env', '@babel/preset-react' ]
 *      }
 *    }
 * }
 */

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <StrictMode>
        <App />
    </StrictMode>
 );
