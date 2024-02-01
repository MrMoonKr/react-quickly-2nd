import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";


class Breeds extends React.Component {
    
    render() {
        
        return (
            <dl>
                {
                    this.props.list.map( ({ breed, description } ) => (
                        <Fragment key={breed}>
                            <dt>{breed}</dt>
                            <dd>{description}</dd>
                        </Fragment>
                    ) )
                }
            </dl>
        ) ;
    }
}

class App extends React.Component {
    
    render() {

        const list = [ 
            { breed: "Chihuahua", description: "Small breed of dog." },
            { breed: "Corgi", description: "Cute breed of dog." },
            { breed: "Cumberland Sheepdog", description: "Extinct breed of dog." }
         ];

        return (
            <Breeds list={list} />
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

