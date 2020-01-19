import * as React from 'react';
import { TileTypes, Item } from '../types';
import List from '../components/list';

interface IHomeProps {
    shows: Item[];
}

const Home: React.FC<IHomeProps> = ({
    shows,
}) => (
        <div>
            <List items={shows} itemType={TileTypes.ShowTile} />
        </div>
    );

export default Home;
