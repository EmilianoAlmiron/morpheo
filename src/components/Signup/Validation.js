export default function Validation(values) {
    let errors = {};
    let nameregex = /^[a-zA-Z ]*$/;
    let mailregex = /^([_\-.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let pswdregex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;

    if (values.username.replace(/\s/g, "").length <= 0) {
        errors.username = "*No whitespaces allowed !";
    }
    else if (values.username.length <= 5) {
        errors.username = "*¡No se permiten espacios en blanco!";
    }
    else if (values.username.length > 25) {
        errors.username = "*¡El nombre debe tener menos de 25 caracteres!";
    }
    else if (!values.username.match(nameregex)) {
        errors.username = "*¡El nombre solo puede contener alfabetos!";
    }


    if (values.email.replace(/\s/g, "").length <= 0) {
        errors.email = "*¡No se permiten espacios en blanco!";
    }
    else if (values.email.length > 40) {
        errors.email = "*¡El correo electrónico debe tener menos de 40 caracteres!";
    }
    else if (!values.email.match(mailregex)) {
        errors.email = "*Por favor introduzca un correo electrónico válido !";
    }


    if (!values.password) {
        errors.password = "*se requiere contraseña";
    }
    else if (values.password.length < 8) {
        errors.password = "*La contraseña debe tener más de 8 caracteres";
    }
    else if (values.password.length > 20) {
        errors.password = "*La contraseña debe tener menos de 20 caracteres";
    }
    else if (!values.password.match(pswdregex)) {
        errors.password = "*Contraseña invalida";
    }

    return errors;
}
