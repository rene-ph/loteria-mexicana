import { ref} from "firebase/database";
import db from './firebaseConfig';

export const getRoomReference =  () => ref(db, 'games/rooms');

export const getPlayersReference = (roomId: string  | undefined, name: string | undefined ) => {
    return  ref(db, `games/rooms/${roomId}/players/${name}`); 
}

export const setRoomReference = (roomId: string | undefined) => ref(db, `games/rooms/${roomId}`);

export const updateRoomReference = (roomId: string | undefined, prop: string) =>  ref(db, `games/rooms/${roomId}/${prop}`);