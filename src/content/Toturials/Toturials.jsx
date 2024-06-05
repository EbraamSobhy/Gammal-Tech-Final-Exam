import React, { useEffect } from "react";
import './tutorials.css';
import Footer from "../../components/Footer/Footer";

function Tutorials() {
    useEffect(() => {
        document.title = "About Exam";
    }, []);
    
    return (
        <div className="tutorials">
            <br />
            <h1 className="tutorials-title">About Exam</h1>
            <p className="about-exam">Welcome to our Gammal Tech Software Engineering Final Exam Web App, a unique platform designed to assess and elevate your knowledge in the field of software engineering. Our app is exclusively tailored to provide a comprehensive examination experience, helping you gauge your proficiency in various aspects of software engineering, from fundamental principles to advanced concepts. By taking our expertly crafted exams, you can identify your strengths and areas for improvement, ensuring you are well-prepared for real-world challenges and academic assessments. Our goal is to offer a rigorous and engaging testing environment that accurately reflects your understanding and skills in software engineering, paving the way for your academic and professional growth. Join us to test your knowledge, track your progress, and achieve excellence in the dynamic world of software engineering.</p>
            <Footer />
        </div>
    );
}

export default Tutorials;
