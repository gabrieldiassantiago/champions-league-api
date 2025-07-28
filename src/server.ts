import express, { Request, Response } from 'express';
import createApp from './app';
import { getPlayer } from './controllers/players.controller';

const app = createApp();

const PORT = process.env.PORT || 3000;

app.get('/players', getPlayer);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
