import React from "react";
import ReactDOM from "react-dom/client";


function Stopwatch() {
    
    const [ seconds, setSeconds ] = React.useState( 0 );

    React.useEffect( () => {

        // onMount 콜백 및 onUpdate 콜백
        const interval = setInterval(
            () => setSeconds( ( seconds ) => seconds + 1 ),
            1000
        );

        // onUnmount 콜백 및 onUpdate 전 콜백
        return () => clearInterval( interval );
    },
    [] );

    return (
        <h1>Seconds: { seconds }</h1>
    );
}

function App() {

    const [ showWatch, setShowWatch ] = React.useState( false );

    const buttonClickHandler = () => setShowWatch( ( value ) => !value );

    return (
        <React.Fragment>
            <button onClick={ buttonClickHandler }>
                Toggle Watch
            </button>
            { showWatch && <Stopwatch /> }
        </React.Fragment>
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

