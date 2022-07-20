const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs')

const usuariosGet = (req = request, res = response) => {

    const {q,nombre = 'no hay', apikey, page= 1, limit} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });

}

const usuariosPut =  async(req, res) => {

    const {id} = req.params;

    const {_id, password, google, correo, ...resto } = req.body;

    // TODO: Validar base de datos

    if(password){
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto )

    res.json({
        ok: true,
        msg: 'put API - usuariosPut',
        usuario
    });
}

const usuariosPost = async(req, res) => {

    const {nombre, correo, password, rol} = req.body;

    const usuario = new Usuario({nombre, correo, password, rol});

    

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt)

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost, 
    usuariosDelete
}