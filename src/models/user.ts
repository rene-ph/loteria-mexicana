export interface ICurrentUser {
    name: string;
    isGM: boolean;
    table: Array<string>;
    winner: boolean;
    winTimes: number;
}