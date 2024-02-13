import React from "react";
import ReactDOM from "react-dom/client";


function BlogPost( { title, body } ) {
    
    React.useEffect( () => {
        document.title = title;
    },
    [ title ] );

    return (
        <article>
            <h1>{title}</h1>
            {body}
        </article>
    );
}

function App() {

    return (
        <main>
            <BlogPost title="First post" body={<p>Welcome to my cool website.</p>} />
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

