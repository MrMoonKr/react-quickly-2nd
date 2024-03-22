import React from "react";
import ReactDOM from "react-dom/client";


function VideoPlayer() {
    
    const [ isPlaying, setPlaying ] = React.useState( false );

    const video = React.useRef();

    const onPlay = () => setPlaying( true );
    const onPause = () => setPlaying( false );
    const onClickPlay = () => video.current.play();
    const onClickPause = () => video.current.pause();

    const VIDEO_SRC = "https://images-assets.nasa.gov/video/One%20Small%20Step/One%20Small%20Step~orig.mp4";

    return (
        <section>
            <video 
                ref={ video } 
                src={ VIDEO_SRC}
                controls
                width={ 480 }
                onPlay={ onPlay }
                onPause={ onPause } >
            </video>
            <button onClick={ isPlaying ? onClickPause : onClickPlay }>
                { isPlaying ? "Pause" : "Play" }
            </button>
        </section>
    );
}

function App() {

    return (
        <VideoPlayer />
    );
}


// ReactDOM.Root 객체 생성 및 App 렌더링

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
 );

