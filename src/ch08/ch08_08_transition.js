import React from "react";
import ReactDOM from "react-dom/client";


function Counter() {
    
    const [counter, setCounter] = React.useState(0);

    return (
        <main>
            <p>Counter: {counter}</p>
            <button onClick={ () => setCounter( ( value ) => value + 1 ) }>
                Increment
            </button>
        </main>
    );
}

function App() {

    return (
        <Counter />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

