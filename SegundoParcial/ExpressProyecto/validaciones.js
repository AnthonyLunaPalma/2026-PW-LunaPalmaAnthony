//Validar contraseña correo y boleta

// Expresiones regulares

//Correo
function validarCorreo(correo){
    
}

//Boleta
function validaBoleta(boleta){
    
}

//Contraseña
function validarContraseña(contraseña){
    if(typeof contraseña !== 'sring') return false;
    return contraseña.length >= 10;
}

module.exports = {validarContraseña, validarContraseña, validaBoleta};