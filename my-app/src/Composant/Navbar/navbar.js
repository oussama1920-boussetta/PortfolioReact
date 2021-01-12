import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div className='bar'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#A propos">A propos</Nav.Link>
                    <Nav.Link href="#Formation">Formation</Nav.Link>
                    <Nav.Link href="#Carriere">Carriere</Nav.Link>                    
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
export default NavBar;