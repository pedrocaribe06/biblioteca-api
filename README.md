markdown

# 📚 Biblioteca Livros API

## 🛠️ Instalação

Clone o repositório:

```bash
git clone https://github.com/pedrocaribe06/bibliotec-api.git
cd bibliotec-api
npm install
npm run dev
O projeto já está configurado para usar SQLite. O arquivo do banco será criado automaticamente.

Acesse em: http://localhost:3000

📁 Estrutura do Projeto
src/ ├── controller/ │ └── LivroController.ts ├── entity/ │ └── Livro.ts ├── repository/ │ └── LivroRepository.ts ├── data-source.ts └── index.ts ormconfig.json package.json tsconfig.json
📖 Endpoints
Método	Rota	Descrição
POST	/api/livros	Cadastrar novo livro
GET	/api/livros	Listar todos os livros
GET	/api/livros/:id	Buscar livro por ID
PUT	/api/livros/:id	Atualizar dados do livro
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
📝 Scripts
npm run dev — Inicia o servidor em modo desenvolvimento com hot reload.
npm run build — Compila o projeto para produção.
npm start — Executa o projeto compilado.
