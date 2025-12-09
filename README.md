# Biblioteca Livros API

API REST para gerenciamento de livros em uma biblioteca. Permite cadastrar, listar, buscar, atualizar e remover livros.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando o ecossistema **TypeScript** conforme os requisitos técnicos:

- **Node.js** (Runtime JS)
- **TypeScript** (Superset tipado)
- **Express.js** (Framework Web)
- **TypeORM** (ORM para persistência de dados)
- **SQLite** (Banco de dados relacional simplificado)

## 🏗 Arquitetura

A solução segue uma arquitetura em camadas ajustada, separando responsabilidades:

- **Controller:** Gerencia as requisições HTTP e contém a lógica de negócio.
- **Repository:** Responsável pela comunicação direta com o banco de dados via ORM.
- **Entity:** Define o modelo de dados (tabela) do Livro.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado.
- Git instalado.

### Passo a Passo

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/pedrocaribe06/biblioteca-api.git](https://github.com/pedrocaribe06/biblioteca-api)
    cd biblioteca-api
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie a aplicação**

    ```bash
    npm run dev
    ```
    O servidor iniciará na porta 3000.

## 📚 Documentação da API (Endpoints)

Abaixo estão listados os endpoints disponíveis para teste via Insomnia ou Postman.

### 1. Criar Livro

- **Método:** `POST`
- **URL:** `/api/livros`
- **Corpo da Requisição (JSON):**
  ```json
  {
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "isbn": "978-85-222-0086-2",
  "anoPublicacao": 1954,
  "disponivel": true
  }
  ```

### 2. Listar Todos os Livros

- **Método:** `GET`
- **URL:** `/api/livros`
- **Retorno:** Retorna um array com todos os livros cadastrados.

### 3. Buscar Livro por ID

- **Método:** `GET`
- **URL:** `/api/livros/{id}`
- **Exemplo:** `/api/livros/1`

### 4. Atualizar Livro

- **Método:** `PUT`
- **URL:** `/api/livros/{id}`
- **Descrição:** Atualiza qualquer campo do livro.
- **Corpo da Requisição (JSON):**
  ```json
  {
    "disponivel": false
  }
  ```

### 5. Excluir Livro

- **Método:** `DELETE`
- **URL:** `/api/livros/{id}`
- **Retorno:** Status 204 (No Content).

## 🗂 Estrutura de Pastas

```
src/ 
├── controller/ 
│ └── LivroController.ts 
├── entity/ 
│ └── Livro.ts 
├── repository/ 
│ └── LivroRepository.ts 
├── data-source.ts 
└── index.ts ormconfig.json package.json tsconfig.json
```

---
