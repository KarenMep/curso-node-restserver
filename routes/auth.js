const {Router} = require('express');
const { check } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = new Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    validarCampos
],  login);

router.post('/google',[
    check('id_token', 'Token de google necesario').not().isEmpty(),
    validarCampos
],  googleSignIn);

module.exports = router;