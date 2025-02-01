# ✨ Angular Project with API Integration and JSON-Server

This project is a frontend application developed with Angular, which communicates with a backend using [JSON-Server](https://github.com/typicode/json-server) to provide simulated data. The integration with the API is done using [RxJS](https://rxjs.dev/), a powerful library for asynchronous programming and data flow manipulation.

## 🎞️ Technologies Used
- **Angular**: Framework used for building the frontend application.
- **RxJS**: Library for manipulating reactive and asynchronous data streams.
- **JSON-Server**: Simulated backend to provide data via a RESTful API.
- **TypeScript**: Language used for developing the Angular application.

## 👜 Features
- The application consumes data from a simulated fake API using JSON-Server.
- It uses RxJS to manage data flows efficiently and asynchronously.
- Example of basic integration with RESTful endpoints: `GET`, `POST`, `PUT`, `DELETE`.

## 🎯 Registration Screen
![Tela](images-project/view-crud-client.png)
![Tela](images-project/selected-item-in-grid-client.png)

## 🛠️ Steps to Run the Project

### 1. Clone the repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

### 2. Install Angular dependencies
Navigate to the project folder and install the Angular dependencies:
```bash
npm install
```

### 3. Install JSON-Server
JSON-Server is used to create a simulated API. To install it globally, run the following command:

```bash
npx i json-server@0.17.4
```

### 4. Start the JSON-Server
Start the JSON-Server to simulate the RESTful API. Run the following command:

```bash
npm json-server produtos.json
```
This will create an API accessible at http://localhost:3000. JSON-Server will simulate the GET, POST, PUT, DELETE routes for the data defined in db.json.

### 5. Start the Angular server
Now, in a new terminal, start the Angular development server with the following command:

```bash
ng serve
```
This will start the Angular application at http://localhost:4200.

# Português

# ✨ Projeto Angular com Integração de API e JSON-Server

Este projeto é uma aplicação frontend desenvolvida com Angular, que se comunica com um backend utilizando o [JSON-Server](https://github.com/typicode/json-server) para fornecer dados simulados. A integração com a API é feita utilizando [RxJS](https://rxjs.dev/), uma poderosa biblioteca para programação assíncrona e manipulação de fluxos de dados.

## 🎞️ Tecnologias Utilizadas

- **Angular**: Framework utilizado para a construção da aplicação frontend.
- **RxJS**: Biblioteca para a manipulação de fluxos de dados reativos e assíncronos.
- **JSON-Server**: Backend simulado para fornecer dados via API RESTful.
- **TypeScript**: Linguagem utilizada para o desenvolvimento da aplicação Angular.

## 👜 Funcionalidades

- A aplicação consome dados de uma API fictícia simulada usando JSON-Server.
- Utiliza RxJS para gerenciar os fluxos de dados de forma eficiente e assíncrona.
- Exemplo de integração básica com endpoints RESTful: `GET`, `POST`, `PUT`, `DELETE`.

## 🎯 Tela de cadastro
![Tela](images-project/view-crud-client.png)
![Tela](images-project/selected-item-in-grid-client.png)

## 🛠️ Passos para Executar o Projeto

### 1. Clone o repositório
Clone o repositório para o seu computador local utilizando o seguinte comando:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

### 2. Instale as dependências do Angular
Navegue até a pasta do projeto e instale as dependências do Angular:
```bash
npm install
```

### 3. Instale o JSON-Server
O JSON-Server é utilizado para criar uma API simulada. Para instalá-lo globalmente, execute o seguinte comando:

```bash
npx i json-server@0.17.4
```

### 4. Inicie o JSON-Server
Inicie o servidor JSON-Server para que ele simule a API RESTful. Execute o seguinte comando:

```bash
npm json-server produtos.json
```
Isso criará uma API acessível em http://localhost:3000. O JSON-Server irá simular as rotas de GET, POST, PUT, DELETE para os dados definidos no db.json.

### 5. Inicie o servidor Angular
Agora, em um novo terminal, inicie o servidor de desenvolvimento do Angular com o comando:

```bash
ng serve
```
Isso iniciará a aplicação Angular no endereço http://localhost:4200.


