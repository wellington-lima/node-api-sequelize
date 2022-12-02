import ClientRepository from '../models/ClientModel';
import { Request, Response } from 'express';

async function findAll(req: Request, res: Response) {
  const clients = await ClientRepository.findAll();
  res.json(clients);
}

async function findClient(req: Request, res: Response) {
  const { id } = req.params;

  const client =  await ClientRepository.findByPk(id);
  res.json(client);
}

async function addClient(req: Request, res: Response) {
  const { nome, email } = req.body;

  const client = await ClientRepository.create({
    nome,
    email,
  });

  res.json(client);
}

async function updateClient(req: Request, res: Response) {
  const { id } = req.params;
  const { nome, email } = req.body;

  await ClientRepository.update(
    { nome, email },
    { where: { id } }
  );

  const client = await ClientRepository.findByPk(id);
  res.json(client);
}

async function deleteClient(req: Request, res: Response) {
  const { id } = req.params;

  await ClientRepository.destroy({
    where: {
      id
    }
  });

  const clients = await ClientRepository.findAll();
  res.json(clients);
}

export default { findAll, findClient, addClient, updateClient, deleteClient };