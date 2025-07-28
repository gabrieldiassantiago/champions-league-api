import { getPlayerById, getPlayers } from "../repositories/players-repository";
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

export const createPlayer = async (playerData: any) => {
    
}
