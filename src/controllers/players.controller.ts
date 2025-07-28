import express, { Request, Response } from 'express';
import { getPlayerByIdService, getPlayerService } from '../services/players-service';

export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = req.params.id;
   const HttpResponse = await getPlayerByIdService(Number(id));
   res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const createPlayer = async (req: Request, res: Response) => {
    
}