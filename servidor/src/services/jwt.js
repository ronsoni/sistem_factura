var jwt = require('jwt-simple');
var moment = require('moment');
var secret='clave_secreta_sin'
exports.createToken=function(users){

    var payload={
        sub: users.id,
        nombre: users.nombre,
        email: users.email,
        role: users.role,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix
    }
    return jwt.encode(payload,secret);

}