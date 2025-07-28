import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "./controllers/players.controller";

const routes = Router();

routes.get('/players', getPlayer)
routes.get('/players/:id', getPlayerById);
routes.post('/players', postPlayer);
routes.delete('/players/:id', deletePlayer )
routes.patch('/players/:id', updatePlayer); // Assuming you have an updatePlayer function)

export default routes;