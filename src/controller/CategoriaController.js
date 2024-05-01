import { prismaClient } from "../database/PrismaClient.js";

export class CategoriaController{
    async criarCategoria(request, response){
        try {
            const { nome } = request.body;
            const novaCategoria = await prisma.categoria.create({
              data: {
                nome
              }
            });
            response.status(200).json(novaCategoria);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível criar a categoria." });
          }
    }

    async listarCategorias(request, response){
        try {
            const categorias = await prisma.categoria.findMany();
            response.status(200).json(categorias);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível listar as categorias." });
          }
    }

    async atualizarCategoria(request, response){
        try {
            const { id } = request.params;
            const { nome } = request.body;
            const categoriaAtualizada = await prisma.categoria.update({
              where: { id: parseInt(id) },
              data: {
                nome
              }
            });
            response.status(200).json(categoriaAtualizada);
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível atualizar a categoria." });
          }
    }

    async excluirCategoria(request, response){
        try {
            const { id } = request.params;
            await prisma.categoria.delete({ where: { id: parseInt(id) } });
            response.status(204).json({ mensagem: "Categoria excluída com sucesso." });
          } catch (error) {
            response.status(500).json({ erro: "Não foi possível excluir a categoria." });
          }
    }
}