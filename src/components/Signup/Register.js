import React from 'react';
import { Link } from "react-router-dom"
import useForm from "./useForm";
import validate from "./Validation";
import FormSuccess from "./FormSuccess";

export default function Register() {

    const { handleInput, handleSubmit, values, errors, isSubmitting } = useForm(validate);

    return (
        <section>
            { (Object.keys(errors).length === 0 && isSubmitting) ? (<FormSuccess name={values.username} />) :
                (<div className="form-container">
                    <h2>Iniciar sesión / Registrarse</h2>
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        <div className="form-input">
                            <label>Nombre</label>
                            <input name="username" type="text" onChange={handleInput} value={values.username} />
                            {errors.username && <small className="form-error">{errors.username}</small>}
                        </div>

                        <div className="form-input">
                            <label>Email</label>
                            <input name="email" type="text" onChange={handleInput} value={values.email} />
                            {errors.email && <small className="form-error">{errors.email}</small>}
                        </div>

                        <div className="form-input">
                            <label>Contraseña <span className="tooltip"> &#9432;
            	                <span className="tooltip-text">La contraseña debe tener al menos: <br /><br />
                                &#8226; 1 digito (0-9)<br />
                                &#8226; 1 alfabeto en mayúscula y 1 en minúscula<br />
                                &#8226; 1 carácter especial (! # $ @ ^% ?)<br />
                                &#8226; 8 caracteres y menos de 20 caracteres</span>
                                </span>
                            </label>
                            <input name="password" type="password" onChange={handleInput} value={values.password} />
                            {errors.password && <small className="form-error">{errors.password}</small>}
                        </div>

                        <button type="submit" className="form-btn">Enviar</button><br />
                        <small>
                        ¿Ya tienes una cuenta? Iniciar sesión aquí<Link to='/register'>here</Link>
                        </small>
                    </form>
                </div>)}
        </section>
    )
}
