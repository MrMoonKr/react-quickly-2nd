import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function Calculator( { a, b } ) {

    const PLUS = ( a, b ) => a + b;
    const MINUS = ( a, b ) => a - b;
    const MULTIPLY = ( a, b ) => a * b;
    
    const [ operator, setOperator ] = useState( () => PLUS );

    return (
        <main>
            <h1>Calculator</h1>
            <button onClick={ () => setOperator( () => PLUS ) }>Plus</button>
            <button onClick={ () => setOperator( () => MINUS ) }>Minus</button>
            <button onClick={ () => setOperator( () => MULTIPLY ) }>Multiply</button>
            <p>
                Result of applying operator( {operator.name} ) to {a} and {b} :
                <code> { operator( a, b ) } </code>
            </p>
        </main>
    );
}

function App() {

    return (
        <div>
            <Calculator a={7} b={4} />
        </div>
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

