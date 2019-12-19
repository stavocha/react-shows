export interface Item {
    id: string;
    pic: string;
    title: string;
    score?: number;
    description: string;
}

export enum TileTypes {
    ShowTile,
    ActorTile,
    CharacterTile,
    SeasonTile,
}
