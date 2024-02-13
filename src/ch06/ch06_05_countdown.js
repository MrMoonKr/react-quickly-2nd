import React from "react";
import ReactDOM from "react-dom/client";


function Countdown( { from } ) {
    
    const [ seconds, setSeconds ] = React.useState( from );
    const [ isRunning, setRunning ] = React.useState( false );

    React.useEffect( () => {
        if ( !isRunning ) {
            return;
        }
        const interval = setInterval(
            () =>
                setSeconds( ( value ) => {
                    if ( value <= 1 ) {
                        setRunning( false );
                    }
                    return value - 1;
                } ),
            1000
        );

        return () => clearInterval( interval );
    },
    [ isRunning ] );

    return (
        <section>
            <h2>Time left: { seconds } seconds</h2>
            <button onClick={ () => setSeconds( from ) }>Reset</button>
            <button onClick={ () => setRunning( ( value ) => !value ) } disabled={ seconds === 0 }>
                { isRunning ? "Pause" : "Resume" }
            </button>
        </section>
    );
}

function App() {

    return (
        <Countdown from={ 10 } />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

