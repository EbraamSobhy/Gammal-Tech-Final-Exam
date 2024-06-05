import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './logo.png';

function NavBar() {
    return (
        <div>
            <style type="text/css">
            {`
                .btn-success, .btn-secondary {
                    background-color: success;
                    color: white;
                    height: 60px;
                    width: 100px;
                }

                .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 30px;
                }
            `}
            </style>
            <Navbar expand="lg" className="bg-white">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/tutorials" target="_blank">About</Nav.Link>
                        <Nav.Link as={Link} to="/content/Front-End" target="_blank">Ref Video</Nav.Link>
                        <Nav.Link as={Link} to="/content/Backend" target="_blank">Final Exam</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link size="lg" href="#" id='register' eventKey={2}><Button variant="success">Sign Up</Button>{' '}</Nav.Link>
                        <Nav.Link id='register1' eventKey={2} href="#">
                            <Button variant="secondary">Log In</Button>{' '}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
