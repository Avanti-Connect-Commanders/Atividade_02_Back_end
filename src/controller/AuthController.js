// import { prismaClient } from "../database/PrismaClient.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

const prisma = new PrismaClient();



export class AuthController{
  async listarUsuario(request, response){
    try {
      const usuarios = await prisma.usuario.findMany();
      response.status(200).json(usuarios);
    } catch (error) {
      response.status(500).json({ erro: "Não foi possível listar usuarios." });
    }
  }

  async registrarUsuario(request, response) {
    const erros = validationResult(request);
    if (!erros.isEmpty()) {
      return response.status(400).json({ erros: erros.array() });
    }

    const { nome, email, senha } = request.body;

    try {
      const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });
      if (usuarioExistente) {
        return response.status(400).json({ erro: 'Usuário já existe com este e-mail.' });
      }

      const salt = await bcrypt.genSalt(10);
      const senhaCriptografada = await bcrypt.hash(senha, salt);

      const novoUsuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha: senhaCriptografada
        }
      });

      const payload = {
        usuario: {
          id: novoUsuario.id
        }
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        response.json({ token });
      });
    } catch (error) {
      console.error(error);
      response.status(500).send('Erro de servidor');
    }
  };

  async loginUsuario(request, response) {
    const erros = validationResult(request);
    if (!erros.isEmpty()) {
      return response.status(400).json({ erros: erros.array() });
    }

    const { email, senha } = request.body;

    try {
      const usuario = await prismaClient.usuario.findUnique({ where: { email } });
      if (!usuario) {
        return response.status(400).json({ erro: 'Credenciais inválidas' });
      }

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (!senhaCorreta) {
        return response.status(400).json({ erro: 'Credenciais inválidas' });
      }

      const payload = {
        usuario: {
          id: usuario.id
        }
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        response.json({ token });
      });
    } catch (error) {
      console.error(error);
      response.status(500).send('Erro de servidor');
    }
  };
}



