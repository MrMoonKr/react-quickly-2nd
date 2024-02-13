import React from "react";
import ReactDOM from "react-dom/client";


function RemoteDropdown() {
    
    const [ options, setOptions ] = React.useState( [] );

    React.useEffect( () => {
        fetch( "https://www.swapi.tech/api/people" )
            .then( ( res ) => res.json() )
            .then( ( data ) => setOptions( data.results.map( ( { name } ) => name ) ) );
    },
    [] );

    const onChangeHandler = ( event ) => {
        //console.log( event );
        console.log( event.target.value );
    }

    return (
        <select onChange={ onChangeHandler }>
            { options.map( ( option ) => (
                <option key={ option }>{ option }</option>
            ) ) }
        </select>
    );
}

function App() {

    return (
        <RemoteDropdown />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

