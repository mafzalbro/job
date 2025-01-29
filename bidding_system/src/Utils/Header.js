import React from 'react'
import {
    Navbar, Nav, Button
} from "react-bootstrap";
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useNavigate, NavLink } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar bg="light" expand="lg">
                {/* <Container> */}
                {/* Left side: Logo */}
                <Navbar.Brand href="Bidding" style={{ marginLeft: "35px" }}>
                    <img
                        alt="Logo"
                        src="/Images/nitsel.png" // Replace with the path to your logo
                        width="200px"
                        height="70px"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                {/* Center: Heading (adjust styling as needed) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <NavLink to="/Material" className="heading"><h4 >Material</h4></NavLink>
                    <NavLink to="/Consumable" className="heading"><h4 >Consumable</h4></NavLink>
                </Navbar.Collapse>

                {/* Right side: Logout Button */}
                <Nav className="ml-auto" style={{ marginRight: "35px" }}>
                    <Button
                        variant="outline-danger"
                        style={{ borderColor: '#0b9fc8', color: '#0b9fc8' }}
                        onMouseOver={(e) => (e.target.style.color = 'white')}
                        onMouseOut={(e) => (e.target.style.color = '#0b9fc8')}
                        onClick={() => navigate("/")}
                    >
                        Logout
                    </Button>
                </Nav>
                {/* </Container> */}
            </Navbar>
        </>
    )
}
export default Header;