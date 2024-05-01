const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthService {
    constructor(usuarioService){
        this.usuarioService = usuarioService;
    }

    async autenticarUsuario(email, senha){
        const usuario = await this.usuarioService.obterUsuarioPorEmail(email);
        if (!usuario){
            throw new Error('Usuário não encontrado.');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if(!senhaCorreta){
            throw new Error('Senha incorreta.');
        }
        const token = this.gerarToken(usuario.id);
        return token;
    }
    gerarToken(usuarioId) {
        
        const token = jwt.sign({ id: usuarioId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }

    validarToken(token) {
    
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return decoded.id;
        } catch (error) {
            throw new Error('Token inválido.');
        }
    }
}
module.exports = AuthService;
