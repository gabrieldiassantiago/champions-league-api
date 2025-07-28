import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  {
        "id": 1,
        "name": "Kevin De Bruyne",
        "club": "Liverpool",
        "nationality": "Norway",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 97,
            "Pace": 90,
            "Shooting": 63,
            "Passing": 60,
            "Dribbling": 75,
            "Defending": 84,
            "Physical": 89
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Liverpool",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 82,
            "Pace": 82,
            "Shooting": 87,
            "Passing": 70,
            "Dribbling": 83,
            "Defending": 34,
            "Physical": 60
        }
    },
    {
        "id": 3,
        "name": "Martin \u00d8degaard",
        "club": "Borussia Dortmund",
        "nationality": "Poland",
        "position": "Midfielder",
        "statistics": {
            "Overall": 86,
            "Pace": 73,
            "Shooting": 71,
            "Passing": 99,
            "Dribbling": 62,
            "Defending": 45,
            "Physical": 92
        }
    },
    {
        "id": 4,
        "name": "Cristiano Ronaldo",
        "club": "Manchester United",
        "nationality": "Norway",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 85,
            "Pace": 60,
            "Shooting": 98,
            "Passing": 70,
            "Dribbling": 86,
            "Defending": 67,
            "Physical": 80
        }
    },
    {
        "id": 5,
        "name": "Luka Modri\u0107",
        "club": "Manchester City",
        "nationality": "Norway",
        "position": "Forward",
        "statistics": {
            "Overall": 85,
            "Pace": 97,
            "Shooting": 81,
            "Passing": 88,
            "Dribbling": 77,
            "Defending": 30,
            "Physical": 72
        }
    },
    {
        "id": 6,
        "name": "Joshua Kimmich",
        "club": "Arsenal",
        "nationality": "Croatia",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 80,
            "Pace": 86,
            "Shooting": 66,
            "Passing": 79,
            "Dribbling": 80,
            "Defending": 68,
            "Physical": 92
        }
    },
    {
        "id": 7,
        "name": "Sadio Man\u00e9",
        "club": "Paris Saint-Germain",
        "nationality": "Senegal",
        "position": "Midfielder",
        "statistics": {
            "Overall": 77,
            "Pace": 88,
            "Shooting": 64,
            "Passing": 79,
            "Dribbling": 83,
            "Defending": 58,
            "Physical": 53
        }
    },
    {
        "id": 8,
        "name": "Neymar Jr",
        "club": "Paris Saint-Germain",
        "nationality": "Netherlands",
        "position": "Forward",
        "statistics": {
            "Overall": 95,
            "Pace": 62,
            "Shooting": 66,
            "Passing": 99,
            "Dribbling": 65,
            "Defending": 57,
            "Physical": 62
        }
    },
    {
        "id": 9,
        "name": "Frenkie de Jong",
        "club": "Bayern Munich",
        "nationality": "Norway",
        "position": "Midfielder",
        "statistics": {
            "Overall": 93,
            "Pace": 93,
            "Shooting": 74,
            "Passing": 84,
            "Dribbling": 64,
            "Defending": 30,
            "Physical": 82
        }
    },
    {
        "id": 10,
        "name": "Kylian Mbapp\u00e9",
        "club": "Tottenham Hotspur",
        "nationality": "France",
        "position": "Midfielder",
        "statistics": {
            "Overall": 76,
            "Pace": 87,
            "Shooting": 61,
            "Passing": 77,
            "Dribbling": 93,
            "Defending": 85,
            "Physical": 62
        }
    },
    {
        "id": 11,
        "name": "Neymar Jr",
        "club": "Bayern Munich",
        "nationality": "Netherlands",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 89,
            "Pace": 73,
            "Shooting": 92,
            "Passing": 64,
            "Dribbling": 71,
            "Defending": 89,
            "Physical": 78
        }
    },
    {
        "id": 12,
        "name": "Karim Benzema",
        "club": "Tottenham Hotspur",
        "nationality": "Senegal",
        "position": "Forward",
        "statistics": {
            "Overall": 88,
            "Pace": 84,
            "Shooting": 92,
            "Passing": 86,
            "Dribbling": 67,
            "Defending": 35,
            "Physical": 80
        }
    },
    {
        "id": 13,
        "name": "Luka Modri\u0107",
        "club": "Borussia Dortmund",
        "nationality": "Germany",
        "position": "Defender",
        "statistics": {
            "Overall": 92,
            "Pace": 98,
            "Shooting": 99,
            "Passing": 78,
            "Dribbling": 68,
            "Defending": 47,
            "Physical": 91
        }
    },
    {
        "id": 14,
        "name": "Harry Kane",
        "club": "Liverpool",
        "nationality": "Norway",
        "position": "Forward",
        "statistics": {
            "Overall": 88,
            "Pace": 80,
            "Shooting": 98,
            "Passing": 63,
            "Dribbling": 72,
            "Defending": 46,
            "Physical": 84
        }
    },
    {
        "id": 15,
        "name": "Riyad Mahrez",
        "club": "Borussia Dortmund",
        "nationality": "France",
        "position": "Defender",
        "statistics": {
            "Overall": 97,
            "Pace": 86,
            "Shooting": 97,
            "Passing": 65,
            "Dribbling": 88,
            "Defending": 42,
            "Physical": 52
        }
    },
    {
        "id": 16,
        "name": "Bernardo Silva",
        "club": "Barcelona",
        "nationality": "Algeria",
        "position": "Forward",
        "statistics": {
            "Overall": 75,
            "Pace": 77,
            "Shooting": 82,
            "Passing": 83,
            "Dribbling": 66,
            "Defending": 45,
            "Physical": 68
        }
    },
    {
        "id": 17,
        "name": "Cristiano Ronaldo",
        "club": "Tottenham Hotspur",
        "nationality": "Argentina",
        "position": "Defender",
        "statistics": {
            "Overall": 83,
            "Pace": 70,
            "Shooting": 86,
            "Passing": 97,
            "Dribbling": 98,
            "Defending": 54,
            "Physical": 50
        }
    },
    {
        "id": 18,
        "name": "Karim Benzema",
        "club": "Paris Saint-Germain",
        "nationality": "Portugal",
        "position": "Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 88,
            "Shooting": 81,
            "Passing": 76,
            "Dribbling": 62,
            "Defending": 47,
            "Physical": 87
        }
    },
    {
        "id": 19,
        "name": "Vin\u00edcius Jr",
        "club": "Manchester City",
        "nationality": "Croatia",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 85,
            "Pace": 76,
            "Shooting": 87,
            "Passing": 65,
            "Dribbling": 81,
            "Defending": 57,
            "Physical": 52
        }
    },
    {
        "id": 20,
        "name": "Robert Lewandowski",
        "club": "Bayern Munich",
        "nationality": "France",
        "position": "Defender",
        "statistics": {
            "Overall": 92,
            "Pace": 77,
            "Shooting": 96,
            "Passing": 88,
            "Dribbling": 80,
            "Defending": 54,
            "Physical": 60
        }
    },
    {
        "id": 21,
        "name": "Sadio Man\u00e9",
        "club": "Bayern Munich",
        "nationality": "Belgium",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 88,
            "Pace": 98,
            "Shooting": 61,
            "Passing": 69,
            "Dribbling": 71,
            "Defending": 45,
            "Physical": 51
        }
    },
    {
        "id": 22,
        "name": "Martin \u00d8degaard",
        "club": "Arsenal",
        "nationality": "Algeria",
        "position": "Defender",
        "statistics": {
            "Overall": 96,
            "Pace": 69,
            "Shooting": 99,
            "Passing": 88,
            "Dribbling": 78,
            "Defending": 45,
            "Physical": 55
        }
    },
    {
        "id": 23,
        "name": "Riyad Mahrez",
        "club": "Tottenham Hotspur",
        "nationality": "Algeria",
        "position": "Forward",
        "statistics": {
            "Overall": 96,
            "Pace": 82,
            "Shooting": 77,
            "Passing": 67,
            "Dribbling": 66,
            "Defending": 36,
            "Physical": 69
        }
    },
    {
        "id": 24,
        "name": "Robert Lewandowski",
        "club": "Manchester City",
        "nationality": "Netherlands",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 91,
            "Pace": 64,
            "Shooting": 83,
            "Passing": 77,
            "Dribbling": 91,
            "Defending": 34,
            "Physical": 89
        }
    },
    {
        "id": 25,
        "name": "Robert Lewandowski",
        "club": "Barcelona",
        "nationality": "Croatia",
        "position": "Forward",
        "statistics": {
            "Overall": 94,
            "Pace": 98,
            "Shooting": 93,
            "Passing": 60,
            "Dribbling": 84,
            "Defending": 32,
            "Physical": 74
        }
    },
    {
        "id": 26,
        "name": "Vin\u00edcius Jr",
        "club": "Real Madrid",
        "nationality": "England",
        "position": "Forward",
        "statistics": {
            "Overall": 77,
            "Pace": 88,
            "Shooting": 65,
            "Passing": 77,
            "Dribbling": 68,
            "Defending": 39,
            "Physical": 65
        }
    },
    {
        "id": 27,
        "name": "Sadio Man\u00e9",
        "club": "Real Madrid",
        "nationality": "England",
        "position": "Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 98,
            "Shooting": 87,
            "Passing": 78,
            "Dribbling": 70,
            "Defending": 77,
            "Physical": 62
        }
    },
    {
        "id": 28,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "South Korea",
        "position": "Defender",
        "statistics": {
            "Overall": 85,
            "Pace": 92,
            "Shooting": 90,
            "Passing": 82,
            "Dribbling": 86,
            "Defending": 67,
            "Physical": 56
        }
    },
    {
        "id": 29,
        "name": "Karim Benzema",
        "club": "Manchester City",
        "nationality": "Algeria",
        "position": "Forward",
        "statistics": {
            "Overall": 96,
            "Pace": 98,
            "Shooting": 69,
            "Passing": 93,
            "Dribbling": 72,
            "Defending": 61,
            "Physical": 72
        }
    },
    {
        "id": 30,
        "name": "Pedri",
        "club": "Manchester City",
        "nationality": "Brazil",
        "position": "Midfielder",
        "statistics": {
            "Overall": 87,
            "Pace": 76,
            "Shooting": 81,
            "Passing": 92,
            "Dribbling": 68,
            "Defending": 86,
            "Physical": 88
        }
    },
    {
        "id": 31,
        "name": "Frenkie de Jong",
        "club": "Manchester City",
        "nationality": "Algeria",
        "position": "Midfielder",
        "statistics": {
            "Overall": 82,
            "Pace": 76,
            "Shooting": 61,
            "Passing": 77,
            "Dribbling": 61,
            "Defending": 53,
            "Physical": 69
        }
    },
    {
        "id": 32,
        "name": "Kevin De Bruyne",
        "club": "Paris Saint-Germain",
        "nationality": "Croatia",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 81,
            "Pace": 68,
            "Shooting": 65,
            "Passing": 62,
            "Dribbling": 71,
            "Defending": 34,
            "Physical": 58
        }
    },
    {
        "id": 33,
        "name": "Neymar Jr",
        "club": "Real Madrid",
        "nationality": "Senegal",
        "position": "Defender",
        "statistics": {
            "Overall": 89,
            "Pace": 70,
            "Shooting": 91,
            "Passing": 76,
            "Dribbling": 80,
            "Defending": 84,
            "Physical": 60
        }
    },
    {
        "id": 34,
        "name": "Pedri",
        "club": "Manchester United",
        "nationality": "Poland",
        "position": "Forward",
        "statistics": {
            "Overall": 75,
            "Pace": 60,
            "Shooting": 75,
            "Passing": 74,
            "Dribbling": 65,
            "Defending": 33,
            "Physical": 81
        }
    },
    {
        "id": 35,
        "name": "Robert Lewandowski",
        "club": "Tottenham Hotspur",
        "nationality": "Germany",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 96,
            "Pace": 95,
            "Shooting": 80,
            "Passing": 83,
            "Dribbling": 82,
            "Defending": 72,
            "Physical": 58
        }
    },
    {
        "id": 36,
        "name": "Sadio Man\u00e9",
        "club": "Real Madrid",
        "nationality": "Argentina",
        "position": "Defender",
        "statistics": {
            "Overall": 88,
            "Pace": 62,
            "Shooting": 79,
            "Passing": 80,
            "Dribbling": 78,
            "Defending": 90,
            "Physical": 61
        }
    },
    {
        "id": 37,
        "name": "Vin\u00edcius Jr",
        "club": "Paris Saint-Germain",
        "nationality": "South Korea",
        "position": "Defender",
        "statistics": {
            "Overall": 97,
            "Pace": 69,
            "Shooting": 76,
            "Passing": 69,
            "Dribbling": 91,
            "Defending": 83,
            "Physical": 65
        }
    },
    {
        "id": 38,
        "name": "Frenkie de Jong",
        "club": "Manchester City",
        "nationality": "Poland",
        "position": "Defender",
        "statistics": {
            "Overall": 94,
            "Pace": 89,
            "Shooting": 72,
            "Passing": 97,
            "Dribbling": 67,
            "Defending": 55,
            "Physical": 63
        }
    },
    {
        "id": 39,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Portugal",
        "position": "Midfielder",
        "statistics": {
            "Overall": 96,
            "Pace": 85,
            "Shooting": 84,
            "Passing": 96,
            "Dribbling": 80,
            "Defending": 77,
            "Physical": 50
        }
    },
    {
        "id": 40,
        "name": "Joshua Kimmich",
        "club": "Manchester City",
        "nationality": "France",
        "position": "Midfielder",
        "statistics": {
            "Overall": 81,
            "Pace": 93,
            "Shooting": 97,
            "Passing": 87,
            "Dribbling": 73,
            "Defending": 38,
            "Physical": 95
        }
    },
    {
        "id": 41,
        "name": "Karim Benzema",
        "club": "Tottenham Hotspur",
        "nationality": "Germany",
        "position": "Forward",
        "statistics": {
            "Overall": 94,
            "Pace": 80,
            "Shooting": 85,
            "Passing": 78,
            "Dribbling": 79,
            "Defending": 58,
            "Physical": 50
        }
    },
    {
        "id": 42,
        "name": "Martin \u00d8degaard",
        "club": "Bayern Munich",
        "nationality": "Portugal",
        "position": "Defender",
        "statistics": {
            "Overall": 78,
            "Pace": 99,
            "Shooting": 83,
            "Passing": 78,
            "Dribbling": 85,
            "Defending": 39,
            "Physical": 75
        }
    },
    {
        "id": 43,
        "name": "Bernardo Silva",
        "club": "Paris Saint-Germain",
        "nationality": "Argentina",
        "position": "Midfielder",
        "statistics": {
            "Overall": 85,
            "Pace": 75,
            "Shooting": 60,
            "Passing": 82,
            "Dribbling": 66,
            "Defending": 85,
            "Physical": 62
        }
    },
    {
        "id": 44,
        "name": "Mohamed Salah",
        "club": "Bayern Munich",
        "nationality": "Germany",
        "position": "Defender",
        "statistics": {
            "Overall": 78,
            "Pace": 72,
            "Shooting": 94,
            "Passing": 96,
            "Dribbling": 69,
            "Defending": 75,
            "Physical": 73
        }
    },
    {
        "id": 45,
        "name": "Luka Modri\u0107",
        "club": "Tottenham Hotspur",
        "nationality": "England",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 77,
            "Pace": 81,
            "Shooting": 82,
            "Passing": 77,
            "Dribbling": 95,
            "Defending": 66,
            "Physical": 53
        }
    },
    {
        "id": 46,
        "name": "Sadio Man\u00e9",
        "club": "Bayern Munich",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 86,
            "Pace": 69,
            "Shooting": 83,
            "Passing": 68,
            "Dribbling": 79,
            "Defending": 77,
            "Physical": 54
        }
    },
    {
        "id": 47,
        "name": "Martin \u00d8degaard",
        "club": "Arsenal",
        "nationality": "Poland",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 80,
            "Pace": 95,
            "Shooting": 92,
            "Passing": 85,
            "Dribbling": 90,
            "Defending": 89,
            "Physical": 87
        }
    },
    {
        "id": 48,
        "name": "Vin\u00edcius Jr",
        "club": "Arsenal",
        "nationality": "Germany",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 83,
            "Pace": 75,
            "Shooting": 63,
            "Passing": 81,
            "Dribbling": 94,
            "Defending": 42,
            "Physical": 95
        }
    },
    {
        "id": 49,
        "name": "Frenkie de Jong",
        "club": "Borussia Dortmund",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 84,
            "Shooting": 86,
            "Passing": 94,
            "Dribbling": 73,
            "Defending": 65,
            "Physical": 63
        }
    },
    {
        "id": 50,
        "name": "Martin \u00d8degaard",
        "club": "Paris Saint-Germain",
        "nationality": "Netherlands",
        "position": "Forward",
        "statistics": {
            "Overall": 78,
            "Pace": 82,
            "Shooting": 94,
            "Passing": 96,
            "Dribbling": 83,
            "Defending": 54,
            "Physical": 64
        }
    },
    {
        "id": 51,
        "name": "Bernardo Silva",
        "club": "Arsenal",
        "nationality": "Brazil",
        "position": "Midfielder",
        "statistics": {
            "Overall": 78,
            "Pace": 77,
            "Shooting": 67,
            "Passing": 70,
            "Dribbling": 96,
            "Defending": 69,
            "Physical": 88
        }
    },
    {
        "id": 52,
        "name": "Karim Benzema",
        "club": "Tottenham Hotspur",
        "nationality": "Norway",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 88,
            "Pace": 85,
            "Shooting": 94,
            "Passing": 95,
            "Dribbling": 93,
            "Defending": 78,
            "Physical": 72
        }
    },
    {
        "id": 53,
        "name": "Mohamed Salah",
        "club": "Manchester City",
        "nationality": "Poland",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 88,
            "Pace": 75,
            "Shooting": 76,
            "Passing": 71,
            "Dribbling": 99,
            "Defending": 79,
            "Physical": 62
        }
    },
    {
        "id": 54,
        "name": "Sadio Man\u00e9",
        "club": "Manchester United",
        "nationality": "Netherlands",
        "position": "Forward",
        "statistics": {
            "Overall": 82,
            "Pace": 98,
            "Shooting": 66,
            "Passing": 69,
            "Dribbling": 87,
            "Defending": 87,
            "Physical": 56
        }
    },
    {
        "id": 55,
        "name": "Martin \u00d8degaard",
        "club": "Liverpool",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 94,
            "Pace": 85,
            "Shooting": 63,
            "Passing": 67,
            "Dribbling": 85,
            "Defending": 37,
            "Physical": 85
        }
    },
    {
        "id": 56,
        "name": "Joshua Kimmich",
        "club": "Liverpool",
        "nationality": "Argentina",
        "position": "Defender",
        "statistics": {
            "Overall": 85,
            "Pace": 63,
            "Shooting": 81,
            "Passing": 93,
            "Dribbling": 87,
            "Defending": 70,
            "Physical": 68
        }
    },
    {
        "id": 57,
        "name": "Kylian Mbapp\u00e9",
        "club": "Tottenham Hotspur",
        "nationality": "Poland",
        "position": "Midfielder",
        "statistics": {
            "Overall": 85,
            "Pace": 69,
            "Shooting": 68,
            "Passing": 98,
            "Dribbling": 62,
            "Defending": 89,
            "Physical": 61
        }
    },
    {
        "id": 58,
        "name": "Joshua Kimmich",
        "club": "Paris Saint-Germain",
        "nationality": "Poland",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 93,
            "Pace": 94,
            "Shooting": 92,
            "Passing": 86,
            "Dribbling": 90,
            "Defending": 72,
            "Physical": 78
        }
    },
    {
        "id": 59,
        "name": "Kylian Mbapp\u00e9",
        "club": "Bayern Munich",
        "nationality": "Poland",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 78,
            "Pace": 83,
            "Shooting": 75,
            "Passing": 96,
            "Dribbling": 99,
            "Defending": 83,
            "Physical": 72
        }
    },
    {
        "id": 60,
        "name": "Robert Lewandowski",
        "club": "Barcelona",
        "nationality": "South Korea",
        "position": "Forward",
        "statistics": {
            "Overall": 97,
            "Pace": 67,
            "Shooting": 93,
            "Passing": 75,
            "Dribbling": 84,
            "Defending": 43,
            "Physical": 93
        }
    }

]

export const getPlayers = async () : Promise<PlayerModel[]> => {
    return database;
}

export const getPlayerById = async (id: number) : Promise<PlayerModel | null> => {
    const player = database.find(p => p.id === id);
    return player || null;
}

export const insertPlayer = async (player: PlayerModel) : Promise<PlayerModel> => {
    const novoPlayer = {...player, id: database.length + 1 };
    database.push(novoPlayer);
    return novoPlayer;
}

//deletar player repository
export const deletePlayer = async (id: number) => {
    const index = database.findIndex(p => p.id === id);
    if (index !== -1) {
        database.splice(index, 1);
       
    }
   
}