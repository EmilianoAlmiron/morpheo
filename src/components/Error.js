import React from "react";
import { Link } from "react-router-dom";

const Error = () => {

    return (
        <section>
            <div className="error-main">
                <p> ¡UPS! Página no encontrada. </p>
                <h1> 404 </h1>
                <Link to="/"> Regresar a HOME </Link>
            </div>
        </section>
    );
}

export default Error;