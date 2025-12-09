import type { Request, Response } from 'express';
import { livroRepository } from "../repository/LivroRepository";
import { Livro } from "../entity/Livro";

export class LivroController {
    static async criar(req: Request, res: Response) {
        const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;
        if (!titulo || !autor || !isbn || !anoPublicacao) {
            return res.status(400).json({ message: "Dados obrigatórios faltando." });
        }
        const livro = livroRepository.create({ titulo, autor, isbn, anoPublicacao, disponivel });
        await livroRepository.save(livro);
        return res.status(201).json(livro);
    }

    static async listarTodos(req: Request, res: Response) {
        const livros = await livroRepository.find();
        return res.json(livros);
    }

    static async buscarPorId(req: Request, res: Response) {
        const { id } = req.params;
        const livro = await livroRepository.findOneBy({ id: Number(id) });
        if (!livro) return res.status(404).json({ message: "Livro não encontrado." });
        return res.json(livro);
    }

    static async atualizar(req: Request, res: Response) {
        const { id } = req.params;
        const dados = req.body;
        let livro = await livroRepository.findOneBy({ id: Number(id) });
        if (!livro) return res.status(404).json({ message: "Livro não encontrado." });
        livroRepository.merge(livro, dados);
        await livroRepository.save(livro);
        return res.json(livro);
    }

    static async remover(req: Request, res: Response) {
        const { id } = req.params;
        const livro = await livroRepository.findOneBy({ id: Number(id) });
        if (!livro) return res.status(404).json({ message: "Livro não encontrado." });
        await livroRepository.remove(livro);
        return res.status(204).send();
    }
}