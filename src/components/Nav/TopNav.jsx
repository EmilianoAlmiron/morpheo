import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget';
import Baner from '../imagenes/DSC_0321.jpg'
import './nav-bar.css';


//import {Navbar, Nav} from 'react-bootstrap';

const NavBar=() => {
    return (
        <div>
            <div>
                <img src={Baner} className="baner" />
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link className="btn btn-outline-primary" to="/">INICIO</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/category/tabaco" className="btn btn-outline-primary">Tabaco</NavLink>
                        <NavLink to="/category/frutales" className="btn btn-outline-primary">Frutales</NavLink>
                        <Nav.Link to="/cart" className="btn btn-outline-primary">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Navbar>
            <div>
                <h1 className="h1">...MORPHEO... Liquidos de Vapeo!!!!</h1>

            </div>
        </div>
    )
}

export default NavBar;
