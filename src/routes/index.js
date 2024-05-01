import { Router } from "express";

import { EventController } from "../controller/EventController.js";
import { CategoriaController } from "../controller/CategoriaController.js";
import { LocalController } from "../controller/LocalController.js";
import { AuthController } from "../controller/AuthController.js";

const routes = Router();
const eventController = new EventController();
const categoriaController = new CategoriaController();
const localController = new LocalController();
const authController = new AuthController();

//Evento
routes.post("/event", eventController.criarEvento)
routes.get("/event/listar", eventController.listarEventos)
routes.put("/event/:id", eventController.atualizarEvento)
routes.delete("/event/:id", eventController.excluirEvento)

//Pesquisar Evento
routes.post("/event/pesquisar", eventController.pesquisarEventos)



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