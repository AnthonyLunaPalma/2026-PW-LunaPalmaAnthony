const bcrypt = require('bcryptjs');

const usuariosModel = require('../Modelo/usuarios');

const {validarCorreo, validarBoleta, validarContraseña} = require('../validaciones')

//que pasa si el correo y la boleta se duplica

function esduplicado(error){
    return error.code === 'ER_DUP_ENTRY' || error.code ==='23505';
}

async function listarUsuarios(req, res) {
    try{
        const usuarios = await usuariosModel.listar();
        res.json(usuarios);
    }catch(error){
        res.status(500).json({error: error.message});
    }

}

async function obtenerUsuario(req, res) {
    try{
        const usuario = await usuariosModel.obtenerPorID(req.params.id);
        if(!usuario) return res.status(404).json({error: 'Usuario no encontrado'});  
    }catch(error){
        res.status(500).json({error: error.message});
    }
}