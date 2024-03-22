import React from "react";
import ReactDOM from "react-dom/client";


function getStyle( isActive ) {
    
    return {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isActive ? 'oldlace' : 'transparent',
    };
}

function Field( { label, children } ) {
    
    return (
        <label>
            { label }: <br />
            { children } <br />
        </label>
    )
}

function Contact() {

    const FOCUS_NONE = 0;
    const FOCUS_USER = 1;
    const FOCUS_REQUEST = 2;
    
    const [ focus, setFocus ] = React.useState( FOCUS_NONE );

    const onUserInfoFocus = () => setFocus( FOCUS_USER );
    const onRequestFocus = () => setFocus( FOCUS_REQUEST );
    const onBlur = () => setFocus( FOCUS_NONE );

    return (
        <form onBlur={ onBlur }>
            <h1>Contact</h1>
            <fieldset onFocus={ onUserInfoFocus } style={ getStyle( focus === FOCUS_USER ) }>
                <legend>User</legend>
                <Field label={'Name'}>
                    <input />
                </Field>
                <Field label={'Email'}>
                    <input type={'email'} />
                </Field>
            </fieldset>
            <fieldset onFocus={ onRequestFocus } style={ getStyle( focus === FOCUS_REQUEST ) }>
                <legend>Request</legend>
                <Field label={'Subject'}>
                    <input />
                </Field>
                <Field label={'Body'}>
                    <textarea />
                </Field>
            </fieldset>
        </form>
    );
}

function App() {

    return (
        <Contact />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

