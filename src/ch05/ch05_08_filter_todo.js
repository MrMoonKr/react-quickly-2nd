import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function markDone( list, index ) {
    return list.map( ( item, i ) => ( i === index ? { ...item, done: true } : item ) );
}

function TodoApplication( { initialTodos } ) {

    const [ todos, setTodos ] = useState( initialTodos );
    const [ hideDone, setHideDone ] = useState( false );
    const filteredTodos= hideDone ? todos.filter( ( {done} ) => !done ) : todos;

    return (
        <main>
            <div>
                <button onClick={ () => setHideDone( false ) }>Show All</button>
                <button onClick={ () => setHideDone( true ) }>Hide Done</button>
            </div>
            { filteredTodos.map( ( todo, index ) => (
                <p key={todo.task}>
                    {
                        todo.done ? ( <strike>{todo.task}</strike> ) :
                            ( <>
                                {todo.task}
                                <button onClick={() => setTodos( (value) => markDone(value, todo.index))}>
                                    x
                                </button>
                            </> )
                    }
                </p>
            ) ) }
        </main>
    );
}

function App() {

    const items = [
        { task: "Feed the plants", done: false, index: 0 },
        { task: "Water the dishes", done: true, index: 1 },
        { task: "Clean the cat", done: false, index: 2 },
    ];

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

