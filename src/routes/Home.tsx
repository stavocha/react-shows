import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { TileTypes, Item } from '../types';
import List from '../components/list';

interface IHomeProps extends RouteComponentProps { 
    shows: Item[];
}

const Home: React.FC<IHomeProps> = ({ shows, history }) => {
    const onShowClick = (id:string) => {
        history.push(`/show/${id}`);
    }
    
    return <div>
        <List items={shows} onItemClick={onShowClick} itemType={TileTypes.Show} />
    </div>;
}

export default withRouter(Home);
