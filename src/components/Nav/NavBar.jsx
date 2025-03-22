import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar expand="lg" className="bg-white">
            <Container className="justify-content-between">
                <Navbar.Brand as={Link} to="/">
                    <img className='logo' src={logo} alt="Logo" />
                </Navbar.Brand>

                {/* Hamburger Menu for small screens */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`custom-toggle ${isOpen ? "rotated" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/ref-video">Ref Video</Nav.Link>
                        <Nav.Link as={Link} to="/final-exam">Final Exam</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
