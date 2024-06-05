import React, { useEffect } from "react";
import './frontend.css';
import Footer from "../../components/Footer/Footer";


function Frontend() {
    useEffect(() => {
        document.title = "Reference Video";
    }, []);

    return (
        <div className="f">
            <br />
            <h1 className="f-title">Reference Video</h1>
            <div class="iframe-container">
            <iframe width="1200" height="650" src="https://www.youtube.com/embed/iCTEYPwvhCQ" title="الامتحان النهائي في جمال تك" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
}

export default Frontend;
