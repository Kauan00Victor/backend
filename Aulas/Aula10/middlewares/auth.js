const jwt = require('Jsonwebtoken')

function validarToken(req, res, next){
    const token = req.headers['authorization'];
    if( jwt.verify(token, '123456')){
        next();
    } else {
        res.status(401).json({msg: 'acesso negado'});
    }
}

module.exports = validarToken