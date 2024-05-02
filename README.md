# Atividade_02_Back_end
 Avanti Bootcamp

Plataforma de Gerenciamento de Eventos Culturais

Propósito: Desenvolver uma plataforma para gerenciamento de eventos culturais, permitindo que organizadores criem e listem eventos, e que os participantes explorem, pesquisem e filtrem eventos com base em categorias, locais e datas.

Escopo: 
  1 - Desenvolvimento do Backend usando Node.js, Prisma e um banco de dados SQL.
  2 - Funcionalidades incluem CRUD (Create, Read, Update, Delete) para eventos, categorias e locais.
  3 - Recursos de pesquisa e filtragem para que os participantes possam encontrar eventos com base em categorias, locais e datas.

Modelagem de Dados:
* Tabelas Principais:
  1 - Eventos: Contém informações sobre os eventos, como nome, data, descrição, categoria e local. Estabelece relacionamentos com as tabelas Categorias e Locais usando chaves estrangeiras.
  2 - Categorias: Armazena as categorias de eventos, como música, arte, teatro, etc.
  3 - Locais: Mantém informações sobre os locais onde os eventos acontecem.

Operações CRUD:
  1 - Foram implementadas operações CRUD para os eventos, categorias e locais.
  2 - Organizadores podem criar eventos.
  3 - Participantes podem listar, explorar e pesquisar eventos com base em categorias, locais e datas.
-------------------------------------------------------------------------------------------------------
Eventos:
* Criar Evento:
  1 - O endpoint permite que os organizadores criem novos eventos.
  2 - O endpoint deve receber os dados do evento, como nome, data, descrição, categoria e local.
* Listar Eventos:
  1 - O endpoint permite listar todos os eventos disponíveis.
  2 - Retorna os eventos em uma resposta JSON.
* Atualizar Evento:
  1 - O endpoint permite os organizadores atualizarem informações de um evento existente.
  2 - O endpoint deve receber o ID do evento a ser atualizado e os novos dados do evento.
* Excluir Evento:
  1 - O endpoint permite que os organizadores excluam um evento existente.
  2 - O endpoint deve receber o ID do evento a ser excluído.
  
Endpoints de Eventos:
1 - Criar Evento
    Descrição: Este endpoint permite aos organizadores criar um novo evento cultural.
    Método HTTP: POST
    URL: /evento
    
Exemplo de Corpo da Requisição:
{
    "nome": "Festival exemplo",
    "data": "2024-06-20T00:00:00.000Z",
    "descricao": "Festival para celebrar o exemplo",
    "categoriaId": 1,
    "localId": 1
}

Resposta de Sucesso:
    Código: 201 Created
    Corpo da Resposta: Objeto JSON contendo os detalhes do evento criado.
Resposta de Erro:
    Código: 500 Bad Request
    Corpo da Resposta: Mensagem de erro indicando os campos inválidos ou ausentes/Impossibilidade de criar evento.

2 - Listar Eventos
    Descrição: Este endpoint permite aos participantes listar todos os eventos disponíveis.
    Método HTTP: GET
    URL: /evento/listar
    
Parâmetros da Requisição:
    Nenhum.

Resposta de Sucesso:
    Código: 200 OK
    Corpo da Resposta: Array de objetos JSON, cada um representando um evento com seus detalhes.

3 - Pesquisar Detalhes de um Evento
    Descrição: Este endpoint permite aos participantes obter os detalhes de um evento específico com base em seu ID de categoria ou ID de local.
    Método HTTP: POST
    URL: /evento/pesquisar

Exemplo de Corpo da Requisição:
{
	"categoriaId": 1,
	"localId": 1
}

Resposta de Sucesso:
    Código: 200 OK
    Corpo da Resposta: Objeto JSON contendo os detalhes do evento solicitado.

4 - Atualizar Evento
    Descrição: Este endpoint permite aos organizadores atualizar os detalhes de um evento existente com base em seu ID.
    Método HTTP: PUT
    URL: /evento/:id

Exemplo de Corpo da Requisição:
{
  "nome": "Festival de Arte Urbana 2.0",
  "data": "2024-06-21T10:00:00.000Z",
  "descricao": "Um festival ampliado que celebra a arte urbana em todas as suas formas.",
  "categoriaId": 2,
  "localId": 3
}

Resposta de Sucesso:
    Código: 200 OK
    Corpo da Resposta: Objeto JSON contendo os detalhes atualizados do evento.
Resposta de Erro:
    Código: 500 Not Found
    Corpo da Resposta: Mensagem indicando que não foi possivel atualizar o evento.

5 - Excluir Evento
    Descrição: Este endpoint permite aos organizadores excluir um evento existente com base em seu ID.
    Método HTTP: DELETE
    URL: /evento/:id

Parâmetros da Requisição:
    O ID único do evento a excluir.

Resposta de Sucesso:
    Código: 204 No Content
Resposta de Erro:
    Código: 500 Not Found
    Corpo da Resposta: Mensagem indicando que não foi possivel excluir o evento.    
-------------------------------------------------------------------------------------------------------
  

Categorias e Locais:
* Criar Categoria/Local:
  1 - Os endpoints permitem a criação de novas categorias e locais, seguinto uma abordagem semelhante à criação de eventos.
  2 - Recebe os dados da categoria/local, como nome, descrição, etc.
* Listar Categorias/Locais:
  1 - Os endpoints permitem listar todas as categorias e locais isponíveis.
  2 - Retorna categorias/locais em uma resposta JSON.
* Atualizar Categoria/Local:
  1 - Os endpoints atualizam informações de categorias/locais existentes, seguindo uma abordagem semelhante à atualização de eventos.
  2 - Recebe o ID da categoria/local a ser atualizado e os novos dados.
* Excluir Categoria/Local:
  1 - Os permitem excluir categorias/locais existentes, seguindo uma abordagem semelhante à exclusão de eventos.
  2 - Recebe o ID da categoria/local a ser excluído.




  


