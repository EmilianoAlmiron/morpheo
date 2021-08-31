import React from 'react'

export default function FormSuccess(props) {
    return (
        <div className="form-container" style={{ textAlign: "center" }}>
            <h1>Hola {props.name}, Formulario enviado correctamente.</h1>
        </div>
    )
}
