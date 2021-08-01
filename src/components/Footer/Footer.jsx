import React from 'react'
import facebook from '../imagenes/icono_face.png'
import style from './Footer.css'
import insta from '../imagenes/icono_insta.png'

function footer() {
    return (
        <div>
            <footer className="final">
                <div className="footer--total">
                    <section className="footer__columnas">
                        <div className="footer__empresas">
                            <h3>Empresa</h3>
                            <p>Somos una empresa dedicada a la representación y distribución de marcas profesionales para el cuidado del cabello y la belleza.
                                Llegamos con nuestros asesores/vendedores a cada rincón de la Provincia de Córdoba desde hace más de 20 años.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="footer__contactos">
                            <h3>Contactanos</h3>
                            <ul>
                                <li><a>Telefono Fijo:4932124</a></li>
                                <li><a>Celular:(0351)153731600</a></li>
                                <li><a href="almironemiliano@gmail.com">gmail</a></li>
                                <li>Direccion: Carmen de patagones 2282</li>
                                <li>Horarios: Lunes a Viernes de 9 a 20hs</li>
                            </ul>
                        </div>
                    </section>
                    <section className="footer__columnas">
                        <div className="footer__redes">
                            <h3>Seguinos en nuestras Redes</h3>
                            <ul>
                                <li className="red">
                                    <a href="https://www.facebook.com/morpheo17" target="_blank"><img src={facebook} className="footer-imagen" alt="" /></a>
                                </li>
                                <li className="red">
                                    <a href="https://www.instagram.com/emiliano_morpheo/?hl=es" target="_blank"><img src={insta} className="footer-imagen" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <p className="derechos white">2021 Todos los derechos reservados./ Politica de privacidad / Aviso legal, Almiron Emiliano.</p>
            </footer>
        </div>
    )
}

export default footer