import React from "react";
import ReactDOM from "react-dom/client";


function Counter( { start } ) {
    
    const [counter, setCounter] = React.useState( start );

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
        <div>
            <Counter start={0} />
            <Counter start={123} />
            <Counter start={-64} />
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

