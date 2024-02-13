import React from "react";
import ReactDOM from "react-dom/client";


function EmailInput( { value } ) {
    
    const [email, setEmail] = React.useState( "" );

    React.useEffect( () => {
        setEmail( value );
    },
    [value] );

    return (
        <label>
            Email address :
            <input type="email" 
                   value={email} 
                   onChange={ ( evt ) => setEmail( evt.target.value ) }>
            </input>
        </label>
    );
}

function App() {

    const EMAIL1 = "daffyduck@looneytunes.invalid";
    const EMAIL2 = "bugsbunny@looneytunes.invalid";
    const EMAIL3 = "elmerfudd@looneytunes.invalid";

    const [defaultEmail, setDefaultEmail] = React.useState( EMAIL1 );

    return (
        <main>
            <button onClick={ () => setDefaultEmail( EMAIL1 ) }>Use {EMAIL1}</button>
            <br />
            <button onClick={ () => setDefaultEmail( EMAIL2 ) }>Use {EMAIL2}</button>
            <br />
            <button onClick={ () => setDefaultEmail( EMAIL3 ) }>Use {EMAIL3}</button>
            <br />
            <EmailInput value={defaultEmail} />
        </main>
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

