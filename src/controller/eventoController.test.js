const { criarEvento } = require('./EventoController');

test('Deve criar um novo evento', async () => {
    const req = {
        body: {
            nome: 'Evento de Teste',
            data: '2024-06-20T00:00:00.000Z',
            descricao: 'Descrição do evento de teste',
            categoriaId: 1,
            localId: 1
        }
    };


    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };


    await criarEvento(req, res);


    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        nome: 'Evento de Teste',
        data: '2024-06-20T00:00:00.000Z',
        descricao: 'Descrição do evento de teste',
        categoriaId: 1,
        localId: 1
    }));
});
