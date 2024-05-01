import { Router } from "express";

import { EventController } from "../controller/EventController.js";
import { CategoriaController } from "../controller/CategoriaController.js";
import { LocalController } from "../controller/LocalController.js";

const routes = Router();
const eventController = new EventController();
const categoriaController = new CategoriaController();
const localController = new LocalController();

//Evento
routes.post("/event", eventController.criarEvento)
routes.get("/", eventController.listarEventos)
routes.put("/event/:id", eventController.atualizarEvento)
routes.delete("/event/:id", eventController.excluirEvento)

//Categoria
routes.post("/categorias", categoriaController.criarCategoria)
routes.get("/categorias", categoriaController.listarCategorias)
routes.put("/categorias/:id", categoriaController.atualizarCategoria)
routes.delete("/categorias/:id", categoriaController.excluirCategoria)

//Local
routes.post("/locais", localController.criarLocal)
routes.get("/locais", localController.listarLocais)
routes.put("/locais/:id", localController.atualizarLocal)
routes.delete("locais/:id", localController.excluirLocal)

export { routes }