import { useEffect } from "react";
import './backend.css';
import Footer from "../../components/Footer/Footer";
import Button from 'react-bootstrap/Button';

function Backend() {
    useEffect(() => {
        document.title = "Final Exam";
    }, []);

    return (
        <div className="backend">
            <br />
            <style type="text/css">
            {`
                .btn-flat {
                    background-color: blue;
                    color: white;
                    height: 100px;
                    width: 190px;
                }

                .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 30px;
                }

                .btn-flat:hover {
                    background-color: royalBlue;
                    color: black;
                    font-weight: 500;
                    border-color: blue;
                    border-style: solid;
                    border-width: 3px;
                }

                    /* Responsive Design */
                    @media (max-width: 768px) {
                .btn-flat {
                    height: 80px;
                    width: 150px;
                }

                .btn-xxl {
                    font-size: 20px;
                }
            }

            @media (max-width: 480px) {
                .btn-flat {
                    height: 60px;
                    width: 120px;
                }

                .btn-xxl {
                    font-size: 15px;
                }
            }
        `}
            </style>
            <h1 className="backend-title">Final Exam</h1>
            <br />
            <h3 className="exam"><ins>Phase 1 : Syntax Errors</ins></h3>
            <p className="exam-content">- You will have 6 Tests Codes in 3 Syntax errors and 3 find bugs.</p>
            <p className="exam-content">- Solve 3 Syntax Errors in 10 Seconds.</p>
            <p className="exam-content">- Solve 3 find Bugs in 15 Seconds.</p>
            <br />
            <h3 className="exam"><ins>Phase 2 : Problem Solving</ins></h3>
            <p className="exam-content">- Your Mentor will give you a problem to solve it and discussing with you.</p>
            <p className="exam-content">- You will write the code answer in documentation (not a compiler).</p>
            <br />
            <h3 className="exam"><ins>Phase 3 : Logical Errors</ins></h3>
            <p className="exam-content">- You will have 3 Tests Codes every code is written with different programming language.</p>
            <p className="exam-content">- Solve problem that you solve it in phase 2.</p>
            <p className="exam-content">- Solve 3 find Bugs (Logical Errors) in 20 Seconds.</p>
            <br />
            <h3 className="exam"><ins>Phase 4 : Software Project</ins></h3>
            <p className="exam-content">- Congratulations so you arrive in phase so you are a professional software engineer.</p>
            <p className="exam-content">- Now use your talent to help people with programming.</p>
            <p className="exam-content">- Want from you to make a Software Project in 5 Minutes.</p>
            <div className="button">
                <a href="https://66616e86063eb06f6a07b729--voluble-cactus-d23c01.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Button variant="flat" size="xxl" className="button-title">
                        Let's Start
                    </Button>
                </a>
            </div>
                <br />
            <Footer />
        </div>
    );
}

export default Backend;
