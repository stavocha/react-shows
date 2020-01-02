import * as React from 'react';
import Header from '../components/header/Header';
import { TileTypes, Item } from '../types';
import List from '../components/list/List';

interface IHomeProps {
    handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void;
    q: string;
    shows: Item[];
}

export const Home: React.FC<IHomeProps> = ({
    handleSearchChange,
    q,
    shows,
}) => {
    return (
        <div>
            <Header handleSearchChange={handleSearchChange} q={q} />
            <List items={shows} itemType={TileTypes.ShowTile} />
        </div>
    );
};
