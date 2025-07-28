import { get } from "http";
import { PlayerModel } from "../models/player-model";
import { deletePlayer, findAndUpdatePlayer, getPlayerById, getPlayers, insertPlayer } from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    // Simulate a database call
   const data = await getPlayers();

   let response = null;

   if (data) {
       response = await ok(data);
   } else {
       response = await noContent();
   }

   return response;

}
export const getPlayerByIdService = async (id: number) => {

    const data = await getPlayerById(id);

    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }
    return response;

}

export const createPlayer = async (playerData: PlayerModel) => {
    if (playerData) {
        const newPlayer = await insertPlayer(playerData);
        if (newPlayer) {
            return await ok(newPlayer);
        } else {
            return await noContent();
        }
    } else {
        return await noContent();
    }
}

export const deletarPlayer = async (id: number) => {
    let response = null;
    const deleted = await deletePlayer(id);
    if (deleted) {
        response = await ok({ message: "Player deleted successfully" });
    } else  {
        response = await noContent();
    }
    return response;
    
}

export const atulizarPlayer = async (id: number, statistics: StatisticsModel) => {
    
    const response = await findAndUpdatePlayer(id, statistics);
  
    if (response) {
        return await ok(response);
    } else {
        return await noContent();
    }

}