import React from "react";
import ReactDOM from "react-dom/client";


function DropdownCounter() {
    
    const [ counter, setCounter ] = React.useState( 0 );

    const onChange = ( evt ) => {
        setCounter( ( value ) => value + parseInt( evt.target.value ) );
    };

    const values = [ 1, 2, 3, 4, 5 ];

    return (
        <section>
            <h1>Counter: { counter }</h1>
            <select onChange={ onChange }>
                { values.map( ( value ) => (
                    <option key={ value } value={ value }>
                        { value }
                    </option>
                ))}
            </select>
        </section>
    );
}

function App() {

    return (
        <DropdownCounter />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

