import React from "react";
import ReactDOM from "react-dom/client";


function Icon( { type } ) {

    return (
        <img src={`../images/${type}.png`} width="16" alt="" />
    )
}

function Button( { label, getIcon } ) {
    
    const [ pressed, setPressed ] = React.useState( false );

    return (
        <button onClick={ () => setPressed( ( value ) => !value ) }>
            { getIcon( pressed ) }
            { label }
        </button>
    );
}

function LockButton() {

    const getIcon = ( pressed ) => {
        pressed ? <Icon type="lock" /> : <Icon type="unlock" />;
    };

    return (
        <Button label="Lock" getIcon={getIcon} />
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

