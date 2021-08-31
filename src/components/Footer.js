import React from 'react';
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import insta from './imag/icono_insta.png'
import facebook from './imag/icono_face.png'

export default function Footer() {

    const styles = {

        smallIcon: {
          width: 50,
          height: 50,
        }       
      };

    let year = new Date();

    return (
        <footer>
            <div className="footer-links">
                <Link to="/">Su cuenta</Link>
                <Link to="/">Tus ordenes</Link>
                <Link to="/">Lista de deseos</Link>
                <Link to="/">Devoluciones</Link>
                <Link to="/">Politica de devoluciones</Link>
                <Link to="/">Politica de reenbolso</Link>
                <Link to="/">Politica de cancelacion</Link>
                <Link to="/">Servicio al Cliente</Link>
                <a href="https://www.facebook.com/morpheo17" ><img style={styles.smallIcon} src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/emiliano_morpheo/?hl=es"><img style={styles.smallIcon} src={insta} alt="" /></a>
            </div>

            <div className="copyright">
                <p>{`${year.getFullYear()}, Morpheo.in`}</p>
                <a href="https://github.com/EmilianoAlmiron" target="_blank" rel="noreferrer" ><GitHubIcon /></a>
            </div> 
        </footer>
    )
}
