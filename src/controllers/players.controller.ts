import express, { Request, Response } from 'express';
import { atulizarPlayer, createPlayer, deletarPlayer, getPlayerByIdService, getPlayerService } from '../services/players-service';
import { StatisticsModel } from '../models/statistics-model';

export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = req.params.id;
   const HttpResponse = await getPlayerByIdService(Number(id));
   res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const playerData = req.body;
    const HttpResponse = await createPlayer(playerData);
    
    if (HttpResponse) {
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
    } else {
        res.status(400).send(); // Bad Request
    }
    
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = req.params.id;
    const HttpResponse = await deletarPlayer(Number(id));
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = req.params.id
    const playerData : StatisticsModel = req.body;

    const HttpResponse = await atulizarPlayer(Number(id), playerData);
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
    
}