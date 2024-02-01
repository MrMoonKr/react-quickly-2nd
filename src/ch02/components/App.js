import React, { Fragment, StrictMode } from "react";

import Link from "./Link.js";


class App extends React.Component {
    
    render() {
        
        // const link1 = React.createElement( Link, 
        //     { framework: "React", url: "//react.dev" },
        //     null );
        
        // const link2 = React.createElement( Link, 
        //     { framework: "Vue", url: "//vuejs.org" },
        //     null );
        
        // const link3 = React.createElement( Link, 
        //     { framework: "Angular", url: "//angular.io" }, 
        //     null );

        // const fragment = React.createElement( React.Fragment, null, link1, link2, link3 );

        // return fragment;

        return (
            //<React.StrictMode>
                <Fragment>
                    <Link framework="React" url="//react.dev" />
                    <Link framework="Vue" url="//vuejs.org" />
                    <Link framework="Angular" url="//angular.io" />
                </Fragment>
            //</React.StrictMode>
        )
    }
}


export default App;
