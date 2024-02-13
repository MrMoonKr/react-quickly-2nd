import React from "react";
import ReactDOM from "react-dom/client";


function Accordion() {
    
    const [ isExpanded, setExpanded ] = React.useState( false );

    return (
        <main>
            <h2>
                Secret Password
                <button onClick={ () => setExpanded( false ) }>
                    -
                </button>
                <button onClick={ () => setExpanded( true ) }>
                    +
                </button>
            </h2>

            { isExpanded && (
                <p>
                    Password: <code>hunter2</code>.
                </p>
            )}
        </main>
    );
}

function App() {

    return (
        <div>
            <Accordion />
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

