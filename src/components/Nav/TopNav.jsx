import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import style from './nav-bar.css';
import CartWidget from './CartWidget';
import Baner from '../imagenes/DSC_0321.jpg'
//import {Navbar, Nav} from 'react-bootstrap';

function TopNav() {
    return (
        <div>
            <div>
                <img src={Baner} className="baner" />
            </div>
            <Nav className="mi-nav" fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <NavLink to="/" eventKey="link-1">INICIO</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/category/tabaco" eventKey="link-2">Tabaco</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/category/frutales" eventKey="link-3">Frutales</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Instagram</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Cars</Nav.Link>
                </Nav.Item>
                <Nav.Link className="mi-carrito" href="/#"><CartWidget /></Nav.Link>
            </Nav>
            <div>
                <h1>...MORPHEO... Liquidos de Vapeo!!!!</h1>

            </div>
        </div>
    )
}

export default TopNav;
