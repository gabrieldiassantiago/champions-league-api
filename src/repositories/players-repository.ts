import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Alice Brown' },
    { id: 5, name: 'Tom Wilson' },  
]

export const getPlayers = async () : Promise<PlayerModel[]> => {
    return database;
}

export const getPlayerById = async (id: number) : Promise<PlayerModel | null> => {
    const player = database.find(p => p.id === id);
    return player || null;
}

