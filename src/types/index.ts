export interface Item {
    id: string;
    pic: string;
    title: string;
    score?: number;
    description: string;
    relatedItems?: object[],
}

export enum TileTypes {
    Show,
    Actor,
    Character,
    Season,
}
