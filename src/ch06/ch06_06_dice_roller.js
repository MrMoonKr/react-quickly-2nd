import React from "react";
import ReactDOM from "react-dom/client";


function Dice() {
    
    const style = {
        border: "2px solid black",
        display: "inline-block",
        width: "2em",
        height: "2em",
        textAlign: "center",
        lineHeight: 2,
    };

    const value = Math.floor( 6 * Math.random() );

    return (
        <span style={style}>{value}</span>
    );
}

function DiceRoller() {
    
    const [ rolls, setRolls ] = React.useState( 1 );

    return (
        <main>
            <h1>Rolls: {rolls}</h1>
            <button onClick={ () => setRolls( ( r ) => r + 1 ) }>Re-Roll</button>
            <div>
                <Dice />
                <Dice />
                <Dice />
            </div>
        </main>
    );
}

function App() {

    return (
        <DiceRoller />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

