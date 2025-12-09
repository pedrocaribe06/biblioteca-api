📚 Biblioteca Livros API
API REST para gerenciamento de livros em uma biblioteca. Permite cadastrar, listar, buscar, atualizar e remover livros.

🚀 Tecnologias Utilizadas
Node.js
TypeScript
Express
TypeORM
SQLite
📦 Instalação
Clone o repositório:

bash

git clone https://github.com/pedrocaribe06/bibliotec-api.git
cd biblioteca-api
Instale as dependências:

bash

npm install
Configure o banco de dados:

O projeto já está configurado para usar SQLite. O arquivo do banco será criado automaticamente.
Inicie a aplicação:

bash

npm run dev
Acesse em: http://localhost:3000

🗂️ Estrutura do Projeto
src/ ├── controller/ │ └── LivroController.ts ├── entity/ │ └── Livro.ts ├── repository/ │ └── LivroRepository.ts ├── data-source.ts └── index.ts ormconfig.json package.json tsconfig.json
📖 Endpoints
Método	Rota	Descrição
POST	/api/livros	Cadastrar novo livro
GET	/api/livros	Listar todos os livros
GET	/api/livros/:id	Buscar livro por ID
PUT	/api/livros/:id	Atualizar dados de um livro
DELETE	/api/livros/:id	Remover livro
Exemplo de JSON para cadastro
json

{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "isbn": "978-85-222-0086-2",
  "anoPublicacao": 1954,
  "disponivel": true
}
🛠️ Scripts
npm run dev — Inicia o servidor em modo desenvolvimento com hot reload.
npm run build — Compila o projeto para JavaScript.
npm start — Executa o projeto compilado.