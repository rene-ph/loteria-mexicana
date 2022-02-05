import { ICurrentUser } from "./user";

export interface IRoom {
    id: string;
    players: Array<ICurrentUser>;
    start: boolean;
    winner: string;
}