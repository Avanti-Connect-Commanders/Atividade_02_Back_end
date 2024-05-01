// import { prismaClient } from "../database/PrismaClient.js"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EventoController {
    async criarEvento(request, response) {
        try {
            const { nome, data, descricao, categoriaId, localId } = request.body;
            const novoEvento = await prisma.evento.create({
                data: {
                    nome,
                    data,
                    descricao,
                    categoria: { connect: { id: categoriaId } },
                    local: { connect: { id: localId } }
                }

            });

            response.status(201).json(novoEvento);
        } catch (error) {
            response.status(500).json({ erro: "Não foi possível criar o evento."});
        }
    }

    async listarEventos(request, response){
        try {
            const eventos = await prisma.evento.findMany();
            response.status(200).json(eventos);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível listar os eventos." });
          }
    }

    async atualizarEvento(request, response){
        try {
            const { id } = request.params;
            const { nome, data, descricao, categoriaId, localId } = request.body;
            const eventoAtualizado = await prisma.evento.update({
              where: { id: parseInt(id) },
              data: {
                nome,
                data,
                descricao,
                categoria: { connect: { id: categoriaId } },
                local: { connect: { id: localId } }
              }
            });
            response.status(200).json(eventoAtualizado);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível atualizar o evento." });
          }
    }

    async excluirEvento (request, response){
        try {
            const { id } = req.params;
            await prisma.evento.delete({ where: { id: parseInt(id) } });
            response.status(204).json({ mensagem: "Evento excluído com sucesso." });
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível excluir o evento." });
          }
    }

    async pesquisarEventos(request, response){
        try {
            const { categoriaId, localId, dataInicio, dataFim } = request.query;
            const filtros = {};
            if (categoriaId) filtros.categoriaId = parseInt(categoriaId);
            if (localId) filtros.localId = parseInt(localId);
            if (dataInicio && dataFim) {
              filtros.data = {
                gte: new Date(dataInicio),
                lte: new Date(dataFim)
              };
            }
            const eventos = await prisma.evento.findMany({ where: filtros });
            response.status(200).json(eventos);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível pesquisar os eventos." });
          }
    }
}