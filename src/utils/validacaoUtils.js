function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function validarSenha(senha) {
    return senha.length >= 6;
}

module.exports = { validarEmail, validarSenha };