const {Router} = require('express');
const { check } = require('express-validator');
const { crearCategoria } = require('../controllers/categorias');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = new Router();

// Obtener todas las categorias- publico
router.get('/', (req, res) => {
    res.json('get')
})

// Obtener una categoria- publico
router.get('/:id', (req, res) => {
    res.json('get id')
})


// Crear categoria - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria );

// Actualizar una categoria- privado - cualquier persona con un token valido
router.put('/:id', (req, res) => {
    res.json('put')
})
module.exports = router;

// Borrar una categoria- privado - admin
router.delete('/:id', (req, res) => {
    res.json('delete')
})


module.exports = router;