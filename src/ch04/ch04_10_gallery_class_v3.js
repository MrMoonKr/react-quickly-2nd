import React from "react";
import ReactDOM from "react-dom/client";


class Image extends React.Component {

    getImageSource() {
        return `//picsum.photos/id/${this.props.index}/150/150/`;
    }
    
    render() {
        return (
            <figure style={{ margin: "5px" }}>
                <img src={this.getImageSource()} alt={this.props.title}>
                </img>
                <figcaption>
                    <h3>Species: {this.props.title}</h3>
                </figcaption>
            </figure>
        );
    }
}

class Gallery extends React.Component {
    
    render() {
        return (
            <section style={{ display: "flex" }}>
                <Image index="1003" title="Deer" />
                <Image index="1020" title="Bear" />
                <Image index="1024" title="Vulture" />
                <Image index="1084" title="Walrus" />
            </section>
        );
    }
}

class App extends React.Component {

    render() {
        return (
            <main>
                <h1>Animals</h1>
                <Gallery />
            </main>
        );
    }
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

