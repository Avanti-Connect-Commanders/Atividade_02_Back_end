# Atividade_02_Back_end
 Avanti Bootcamp

# Plataforma de Gerenciamento de Eventos Culturais

Propósito: Desenvolver uma plataforma para gerenciamento de eventos culturais, permitindo que organizadores criem e listem eventos, e que os participantes explorem, pesquisem e filtrem eventos com base em categorias, locais e datas.

## Escopo:   
  1. Desenvolvimento do Backend usando Node.js, Prisma e um banco de dados SQL.  
  2. Funcionalidades incluem CRUD (Create, Read, Update, Delete) para eventos, categorias e locais.  
  3. Recursos de pesquisa e filtragem para que os participantes possam encontrar eventos com base em categorias, locais e datas.  

## Modelagem de Dados:
### Tabelas Principais:  
  1.Eventos: Contém informações sobre os eventos, como nome, data, descrição, categoria e local. Estabelece relacionamentos com as tabelas Categorias e Locais usando chaves estrangeiras.  
  2.Categorias: Armazena as categorias de eventos, como música, arte, teatro, etc.  
  3.Locais: Mantém informações sobre os locais onde os eventos acontecem.

### Operações CRUD:  
  1. Foram implementadas operações CRUD para os eventos, categorias e locais.  
  2. Organizadores podem criar eventos.  
  3. Participantes podem listar, explorar e pesquisar eventos com base em categorias, locais e datas.  

## Eventos:
### Criar Evento:  
  1. O endpoint permite que os organizadores criem novos eventos.  
  2. O endpoint deve receber os dados do evento, como nome, data, descrição, categoria e local.  
### Listar Eventos:  
  1. O endpoint permite listar todos os eventos disponíveis.  
  2. Retorna os eventos em uma resposta JSON.  
### Atualizar Evento:  
  1. O endpoint permite os organizadores atualizarem informações de um evento existente.  
  2. O endpoint deve receber o ID do evento a ser atualizado e os novos dados do evento.  
### Excluir Evento:  
  1. O endpoint permite que os organizadores excluam um evento existente.  
  2. O endpoint deve receber o ID do evento a ser excluído.  
  
#### Endpoints de Eventos:  
#### 1 - Criar Evento
    Descrição: Este endpoint permite aos organizadores criar um novo evento cultural.
    Método HTTP: POST
    URL: /evento
    
#### Exemplo de Corpo da Requisição:  
	{  
    "nome": "Festival exemplo",  
    "data": "2024-06-20T00:00:00.000Z",  
    "descricao": "Festival para celebrar o exemplo",  
    "categoriaId": 1,  
    "localId": 1  
	}

#### Resposta de Sucesso:
    Código: 201 Created
    Corpo da Resposta: Objeto JSON contendo os detalhes do evento criado.
#### Resposta de Erro:
    Código: 500 Bad Request
    Corpo da Resposta: Mensagem de erro indicando os campos inválidos ou ausentes/Impossibilidade de criar evento.

#### 2 - Listar Eventos
    Descrição: Este endpoint permite aos participantes listar todos os eventos disponíveis.
    Método HTTP: GET
    URL: /evento/listar
    
#### Parâmetros da Requisição:
    Nenhum.

#### Resposta de Sucesso:
    Código: 200 OK
    Corpo da Resposta: Array de objetos JSON, cada um representando um evento com seus detalhes.

#### 3 - Pesquisar Detalhes de um Evento
    Descrição: Este endpoint permite aos participantes obter os detalhes de um evento específico com base em seu ID de categoria ou ID de local.
    Método HTTP: POST
    URL: /evento/pesquisar

#### Exemplo de Corpo da Requisição:
	{  
	"categoriaId": 1,  
	"localId": 1  
	}  

#### Resposta de Sucesso:
    Código: 200 OK
    Corpo da Resposta: Objeto JSON contendo os detalhes do evento solicitado.

#### 4 - Atualizar Evento
    Descrição: Este endpoint permite aos organizadores atualizar os detalhes de um evento existente com base em seu ID.
    Método HTTP: PUT
    URL: /evento/:id

#### Exemplo de Corpo da Requisição:  
	{  
  	"nome": "Festival de Arte Urbana 2.0",  
  	"data": "2024-06-21T10:00:00.000Z",  
 	 "descricao": "Um festival ampliado que celebra a arte urbana em todas as suas formas.",  
  	"categoriaId": 2,  
 	 "localId": 3  
	}  

#### Resposta de Sucesso:
    Código: 200 OK
    Corpo da Resposta: Objeto JSON contendo os detalhes atualizados do evento.
#### Resposta de Erro:
    Código: 500 Not Found
    Corpo da Resposta: Mensagem indicando que não foi possivel atualizar o evento.

#### 5 - Excluir Evento
    Descrição: Este endpoint permite aos organizadores excluir um evento existente com base em seu ID.
    Método HTTP: DELETE
    URL: /evento/:id

#### Parâmetros da Requisição:
    O ID único do evento a excluir.

#### Resposta de Sucesso:
    Código: 204 No Content
#### Resposta de Erro:
    Código: 500 Not Found
    Corpo da Resposta: Mensagem indicando que não foi possivel excluir o evento.    
  
## Categorias e Locais:  
### Criar Categoria/Local:  
  1. Os endpoints permitem a criação de novas categorias e locais, seguinto uma abordagem semelhante à criação de eventos.  
  2.  Recebe os dados da categoria/local, como nome, descrição, etc.  
### Listar Categorias/Locais:  
  1. Os endpoints permitem listar todas as categorias e locais isponíveis.
  2. Retorna categorias/locais em uma resposta JSON.  
### Atualizar Categoria/Local:  
  1. Os endpoints atualizam informações de categorias/locais existentes, seguindo uma abordagem semelhante à atualização de eventos.
  2. Recebe o ID da categoria/local a ser atualizado e os novos dados.  
### Excluir Categoria/Local:  
  1. Os permitem excluir categorias/locais existentes, seguindo uma abordagem semelhante à exclusão de eventos.
  2. Recebe o ID da categoria/local a ser excluído.

#### Endpoints de Categorias:  
#### 1 - Listar Todas as categorias:  
	URL: /categorias/listar
	Método: GET

#### Parâmetros da Requisição: 
	Nenhum

#### Resposta de Sucesso:
	Código: 200 OK
	Conteúdo: Lista de todas as categorias de eventos.  
#### 2 - Criar Nova Categoria
 	URL: /categorias
	Método: POST

#### Corpo da Requisição: 
	JSON com os seguintes campos:
	nome: Nome da nova categoria.

#### Resposta de Sucesso:
	Código: 200 Created
	Conteúdo: Categoria recém-criada.

#### 3 - Atualizar Categoria: 
	URL: /categorias/:id
	Método: PUT

#### Parâmetros da Requisição: 
	id da categoria a ser atualizada.

#### Corpo da Requisição: 
	JSON com os campos a serem atualizados:
	nome: Novo nome da categoria.

#### Resposta de Sucesso:
	Código: 200 OK
	Conteúdo: Categoria atualizada.  

 #### 5 - Deletar Categoria:
	URL: /categorias/:id
	Método: DELETE
 
#### Parâmetros da Requisição:
	id da categoria a ser deletada.
 
#### Resposta de Sucesso:
	Código: 204 No Content
	Conteúdo: Nenhum conteúdo na resposta.

 #### Endpoints de Locais:  
#### 1 - Listar Todos os Locais:  
	URL: /locais/listar
	Método: GET

#### Parâmetros da Requisição: 
	Nenhum

#### Resposta de Sucesso:
	Código: 200 OK
	Conteúdo: Lista de todos os locais de eventos.  
 
#### 2 - Criar Novo Local
 	URL: /locais
	Método: POST

#### Corpo da Requisição: 
	JSON com os seguintes campos:
	nome: Nome do novo local.

#### Resposta de Sucesso:
	Código: 200 Created
	Conteúdo: Local recém-criado.

#### 3 - Atualizar Local: 
	URL: /locais/:id
	Método: PUT

#### Parâmetros da Requisição: 
	id do local a ser atualizado.

#### Corpo da Requisição: 
	JSON com os campos a serem atualizados:
	nome: Novo nome do local.

#### Resposta de Sucesso:
	Código: 200 OK
	Conteúdo: Local atualizada.  

 #### 5 - Deletar Local:
	URL: /locais/:id
	Método: DELETE
 
#### Parâmetros da Requisição:
	id do local a ser deletado.
 
#### Resposta de Sucesso:
	Código: 204 No Content
	Conteúdo: Nenhum conteúdo na resposta.

### AuthController (Endpoints de Usuário)  
#### 1 - Listar Usuários
Endpoint para listar todos os usuários cadastrados na plataforma.

	URL: /usuarios/listar
	Método: GET

#### Parâmetros da Requisição: 
	Nenhum

#### Resposta de Sucesso:
	Código: 200 OK
	Conteúdo: Array contendo detalhes de todos os usuários.

 #### 2 - Registrar Usuário
 Endpoint para registrar um novo usuário na plataforma.

	URL: /auth/registrar
	Método: POST
 
#### Corpo da Requisição: 
##### JSON com os seguintes campos:
	{
	nome: Nome do usuário,
	email: Endereço de e-mail do usuário,
	senha: Senha do usuário.
	}

#### Resposta de Sucesso:
	Código: 200 OK
	Conteúdo: Token de autenticação JWT.

# Testes Unitários

Aqui estão os testes unitários para as funções de validação de e-mail e senha.

## Funcionalidade de Validação de E-mail

### Teste 1: E-mail Válido

Testa se a função `validarEmail` retorna `true` para um e-mail válido.

- **Entrada:** `'usuario@example.com'`
- **Resultado Esperado:** `true`

### Teste 2: E-mail sem @

Testa se a função `validarEmail` retorna `false` para um e-mail sem o caractere '@'.

- **Entrada:** `'usuarioexample.com'`
- **Resultado Esperado:** `false`

### Teste 3: E-mail sem .

Testa se a função `validarEmail` retorna `false` para um e-mail sem o caractere '.'.

- **Entrada:** `'usuario@examplecom'`
- **Resultado Esperado:** `false`

### Teste 4: E-mail Vazio

Testa se a função `validarEmail` retorna `false` para um e-mail vazio.

- **Entrada:** `''`
- **Resultado Esperado:** `false`

## Funcionalidade de Validação de Senha

### Teste 5: Senha com Mais de 6 Caracteres

Testa se a função `validarSenha` retorna `true` para uma senha com mais de 6 caracteres.

- **Entrada:** `'senhavalida'`
- **Resultado Esperado:** `true`

### Teste 6: Senha com Menos de 6 Caracteres

Testa se a função `validarSenha` retorna `false` para uma senha com menos de 6 caracteres.

- **Entrada:** `'curta'`
- **Resultado Esperado:** `false`

### Teste 7: Senha Vazia

Testa se a função `validarSenha` retorna `false` para uma senha vazia.

- **Entrada:** `''`
- **Resultado Esperado:** `false`

  # Teste de Criação de Evento

Este teste verifica se a função `criarEvento` cria um novo evento com os parâmetros fornecidos.

## Configuração do Teste

Para este teste, são fornecidos os seguintes parâmetros para a requisição:

```json
{
    "nome": "Evento de Teste",
    "data": "2024-06-20T00:00:00.000Z",
    "descricao": "Descrição do evento de teste",
    "categoriaId": 1,
    "localId": 1
}



