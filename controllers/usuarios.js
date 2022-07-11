const { response } = require('express')


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

const usuariosPut =  (req, res) => {

    const {id} = req.params;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre,edad
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