function verificarPermissao(roles) {
    return (request, response, next) => {
        const { usuario } = request;

        if (!usuario || !roles.includes(usuario.role)) {
            return response.status(403).json({ erro: 'Você não tem permissão para acessar este recurso.' });
        }

        next();
    };
}

module.export = verificarPermissao;