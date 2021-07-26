import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
//import {Navbar, Nav} from 'react-bootstrap';

function TopNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">MORPHEO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Imagenes</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                    <Nav>
                        {/*<Nav.Link href="#deets">Lo Mas Vendido</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>*/}
                        <Nav.Link href="/#"><CartWidget/></Nav.Link>
                    </Nav>
                        
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopNav;