import React from "react";
import ReactDOM from "react-dom/client";


function DoubleClickCounter( { from } ) {
    
    const [ counter, setCounter ] = React.useState( 0 );
    const lastClickTime = React.useRef( null );

    const onClick = () => {

        const isDoubleClick = Date.now() - lastClickTime.current < 300 ;
        if ( isDoubleClick ) {
            setCounter( ( value ) => value + 1 ) ;
        }
        else {
            lastClickTime.current = Date.now() ;
        }
    }

    //

    return (
        <main>
            <p>Counter : { counter }</p>
            <button onClick={ onClick }>Increment</button>
        </main>
    );
}

function App() {

    return (
        <DoubleClickCounter />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

