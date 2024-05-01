import { Router } from "express";

import { EventoController } from "../controller/EventoController.js";
import { CategoriaController } from "../controller/CategoriaController.js";
import { LocalController } from "../controller/LocalController.js";
import { AuthController } from "../controller/AuthController.js";

import {autenticarToken} from "../middlewares/autenticacaoMiddleware.js"


const routes = Router();
const eventoController = new EventoController();
const categoriaController = new CategoriaController();
const localController = new LocalController();
const authController = new AuthController();

//Evento
routes.post("/evento",autenticarToken, eventoController.criarEvento)
routes.get("/evento/listar", eventoController.listarEventos)
routes.put("/evento/:id",autenticarToken, eventoController.atualizarEvento)
routes.delete("/evento/:id",autenticarToken, eventoController.excluirEvento)

//Pesquisar Evento
routes.post("/evento/pesquisar", eventoController.pesquisarEventos)

//Categoria
routes.post("/categorias", categoriaController.criarCategoria)
routes.get("/categorias/listar", categoriaController.listarCategorias)
routes.put("/categorias/:id", categoriaController.atualizarCategoria)
routes.delete("/categorias/:id", categoriaController.excluirCategoria)

//Local
routes.post("/locais", localController.criarLocal)
routes.get("/locais/listar", localController.listarLocais)
routes.put("/locais/:id", localController.atualizarLocal)
routes.delete("locais/:id", localController.excluirLocal)

//Usuário
routes.post("/registrar", authController.registrarUsuario)
routes.get("/usuarios/listar", authController.listarUsuario)



export { routes }