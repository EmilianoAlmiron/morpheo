import React from 'react';
import { Link } from "react-router-dom";
import ShippingIcon from '@material-ui/icons/LocalShipping';
import SupportIcon from '@material-ui/icons/ContactSupport';
import ReturnIcon from '@material-ui/icons/MonetizationOn';
import CancelIcon from '@material-ui/icons/Cancel';

export default function Home() {

    const styles = {

        largeIcon: {
            width: 30,
            height: 30,
            marginRight: 3
        }

    };

    return (
        <section>
            <div className="landing-box">
                <div>
                    <h1>Todo lo que necesitas para dejar de FUMAR.....</h1>
                    <p>Si queres emprenderte en este hermoso mundo del vapeo, te ayudamos con nuestros excelentes productos.</p>
                    <h6>SI ERES MAYOR DE 18, "APRIETA EN COMPRAR AHORA"</h6>
                    <Link to="/products">COMPRA AHORA</Link>
                </div>

                <img src="53884413_122167122227774_6389533987033987507_n.jpg" alt="landing-pic" />
            </div>

            <div className="features">
                <div className="features-card">
                    <p className="features-head"><ShippingIcon style={styles.largeIcon} /> Envio gratis</p>
                    <p className="features-para">Envios sin cargo, con una compra MAYOR a $500</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><CancelIcon style={styles.largeIcon} /> Facil Cancelacion</p>
                    <p className="features-para">Cancele en cualquier momento según sus necesidades.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><ReturnIcon style={styles.largeIcon} />Devolución y reembolso fáciles</p>
                    <p className="features-para">Ofrecemos una política de devolución y reembolso de 30 días.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><SupportIcon style={styles.largeIcon} />Atención al cliente 24x7</p>
                    <p className="features-para">Brindamos soporte de atención al cliente 24 * 7 para comentarios, sugerencias y quejas.</p>
                </div>

            </div>
        </section>
    )
}
