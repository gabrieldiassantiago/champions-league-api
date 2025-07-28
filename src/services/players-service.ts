import { PlayerModel } from "../models/player-model";
import { getPlayerById, getPlayers, insertPlayer } from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";

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
            console.error("Failed to create player");
        }
    } else {
        return await noContent();
    }
}
