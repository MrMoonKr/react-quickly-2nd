import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function Counter( { a, b } ) {

    const [ counter, setCounter ] = useState( 0 );

    return (
        <main>
            <p>
                Counter : {counter}
            </p>
            <button onClick={ () => setCounter( ( value ) => value + 1 ) }>
                Increment
            </button>
            <button onClick={ () => setCounter( 0 ) }>
                Reset
            </button>
        </main>
    );
}

function App() {

    return (
        <div>
            <Counter />
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

