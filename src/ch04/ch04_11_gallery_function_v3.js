import React from "react";
import ReactDOM from "react-dom/client";


function Image( { index, title } ) {

    const getImageSource = () => `//picsum.photos/id/${index}/150/150/`;
    
    return (
        <figure>
            <img 
                src={getImageSource()} 
                alt={title} 
            />
            <figcaption>
                <h3>Species: {title}</h3>
            </figcaption>
        </figure>
    );
}


function Gallery() {
    
    return (
        <section style={{ display: "flex" }}>
            <Image index="1003" title="Deer" />
            <Image index="1020" title="Bear" />
            <Image index="1024" title="Vulture" />
            <Image index="1084" title="Walrus" />
        </section>
    );
}


function App() {

    return (
        <main>
            <h1>Animals</h1>
            <Gallery />
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

