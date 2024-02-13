import React from "react";
import ReactDOM from "react-dom/client";


function Icon( { type } ) {

    return (
        <img src={`../images/${type}.png`} width="16" alt="" />
    )
}

function Button( { label, Icon } ) {
    
    const [ pressed, setPressed ] = React.useState( false );

    return (
        <button onClick={ () => setPressed( ( value ) => !value ) }>
            <Icon pressed={pressed} />
            { label }
        </button>
    );
}

function LockIcon( { pressed } ) {

    return (
        pressed ? <Icon type="lock" /> : <Icon type="unlock" />
    )
}

function LockButton() {

    return (
        <Button label="Lock" Icon={LockIcon} />
    )
}

function App() {

    return (
        <LockButton />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

