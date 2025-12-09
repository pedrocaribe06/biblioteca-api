import express from "express";
import { AppDataSource } from "./data-source";
import { LivroController } from "./controller/LivroController";

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());
    
    app.post("/api/livros", LivroController.criar);
    app.get("/api/livros", LivroController.listarTodos);
    app.get("/api/livros/:id", LivroController.buscarPorId);
    app.put("/api/livros/:id", LivroController.atualizar);
    app.delete("/api/livros/:id", LivroController.remover);

    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});
