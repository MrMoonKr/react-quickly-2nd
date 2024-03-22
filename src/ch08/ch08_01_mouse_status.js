import React from "react";
import ReactDOM from "react-dom/client";


function MouseStatus() {
    
    const [ isMoving, setMoving ] = React.useState( false );
    const onMouseMove = () => {
        setMoving( true );
    };

    React.useEffect( () => {
        if ( !isMoving ) return;
        const timeout = setTimeout( () => setMoving( false ), 500 );

        return () => {
            clearTimeout( timeout );
        }
    },
    [ isMoving ] );

    return (
        <section onMouseMove={ onMouseMove }>
            <h2>
                The mouse is { !isMoving && "not" } moving: { isMoving ? "✓" : "✗" }
            </h2>
        </section>
    );
}

function App() {

    return (
        <MouseStatus />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

