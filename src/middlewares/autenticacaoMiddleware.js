// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';


export function autenticarToken(req, res, next){
    const token = request.header('Authorization');

    if(!token){
        return response.status(401).json({erro: 'Token de autenticação não fornecida.'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        request.usuario = decoded.usuario;
        next();

    } catch (error) {
        return response.status(401).json({erro: 'Token de autenticação inválido'});
    }
}

// module.exports = autenticarToken;