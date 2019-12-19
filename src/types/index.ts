export interface Item {
    id: string;
    pic: string;
    title: string;
    description: string;
}

export enum TileTypes {
    ShowTile,
    ActorTile,
    CharacterTile,
    SeasonTile,
}
