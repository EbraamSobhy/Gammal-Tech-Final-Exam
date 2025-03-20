import { useEffect } from "react";
import './frontend.css';

function Frontend() {
    useEffect(() => {
        document.title = "Reference Video";
    }, []);

    return (
        <div className="f">
            <br />
            <h1 className="f-title">Reference Video</h1>
            <div className="iframe-container">
                <iframe 
                    width="1200" 
                    height="650" 
                    src="https://www.youtube.com/embed/iCTEYPwvhCQ" 
                    title="الامتحان النهائي في جمال تك" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>
            <br /><br />
        </div>
    );
}

export default Frontend;
