import React from 'react';
import BgImage from "./background.jpg";
const App = () =>{
    return (
        <div className= "App">
            <div className="ImagePreview">
                <div style={{backgroundImage : `url(${BgImage})`}} />
            </div>
            <div className= "DropArea">
            <div className="ImageProgress">
                    <div className="ImageProgressImage" style={{ backgroundImage: `url(${BgImage})` }}></div>
                    <div className="ImageProgressUploaded" style={{ backgroundImage: `url(${BgImage})` }}></div>
                </div> 
                <div className="Status">Drag & Drop here!</div>
            </div>
        </div>
    );
};

export default App;