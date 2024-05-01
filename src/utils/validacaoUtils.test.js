const { validarEmail, validarSenha } = require('./validacaoUtils');


test('Deve retornar true para um email válido', () => {
    const email = 'usuario@example.com';
    expect(validarEmail(email)).toBe(true);
});

test('Deve retornar false para um email sem @', () => {
    const email = 'usuarioexample.com';
    expect(validarEmail(email)).toBe(false);
});

test('Deve retornar false para um email sem .', () => {
    const email = 'usuario@examplecom';
    expect(validarEmail(email)).toBe(false);
});

test('Deve retornar false para um email vazio', () => {
    const email = '';
    expect(validarEmail(email)).toBe(false);
});


test('Deve retornar true para uma senha com mais de 6 caracteres', () => {
    const senha = 'senhavalida';
    expect(validarSenha(senha)).toBe(true);
});

test('Deve retornar false para uma senha com menos de 6 caracteres', () => {
    const senha = 'curta';
    expect(validarSenha(senha)).toBe(false);
});

test('Deve retornar false para uma senha vazia', () => {
    const senha = '';
    expect(validarSenha(senha)).toBe(false);
});
