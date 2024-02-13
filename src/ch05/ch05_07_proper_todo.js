import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function TodoApplication( { initialTodos } ) {

    const [ todos, setTodos ] = useState( initialTodos );

    return (
        <main>
            { todos.map( ( todo, index ) => (
                <p key={todo}>
                    {todo}
                    <button
                        onClick={ () => {
                            setTodos( ( value ) => [
                                ...value.slice( 0, index ),
                                ...value.slice( index + 1 )
                            ] );
                        } }
                    >
                        x
                    </button>
                </p>
            ) ) }
        </main>
    );
}

function App() {

    const items = ["Feed the plants", "Water the dishes", "Clean the cat"];

    return (
        <div>
            <TodoApplication initialTodos={ items }/>
        </div>
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

