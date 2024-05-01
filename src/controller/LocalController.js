// import { prismaClient } from "../database/PrismaClient.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class LocalController {
    async criarLocal (request, response){
        try {
            const { nome, endereco } = request.body;
            const novoLocal = await prisma.local.create({
              data: {
                nome,
                endereco
              }
            });
            response.status(200).json(novoLocal);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível criar o local." });
          }
    }

    async listarLocais(request, response){
        try {
            const locais = await prisma.local.findMany();
            response.status(200).json(locais);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível listar os locais." });
          }
    }

    async atualizarLocal(request, response){
        try {
            const { id } = request.params;
            const { nome, endereco } = request.body;
            const localAtualizado = await prisma.local.update({
              where: { id: parseInt(id) },
              data: {
                nome,
                endereco
              }
            });
            response.status(200).json(localAtualizado);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível atualizar o local." });
          }
    }

    async excluirLocal(request, response){
        try {
            const { id } = request.params;
            await prisma.local.delete({ where: { id: parseInt(id) } });
            response.status(204).json({ mensagem: "Local excluído com sucesso." });
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível excluir o local." });
          }
    }
}