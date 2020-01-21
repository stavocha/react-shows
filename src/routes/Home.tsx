import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { TileTypes, Item } from '../types';
import List from '../components/list';
import { setSelectedShow } from '../redux/features/showDetails/showDetailsSlice'
import { useDispatch } from 'react-redux';
interface IHomeProps extends RouteComponentProps { 
    shows: Item[];
}

const Home: React.FC<IHomeProps> = ({ shows, history }) => {
    const dispatch = useDispatch();
    const onShowClick = (item:Item) => {
        dispatch(setSelectedShow({ show: item }));
        history.push(`/show/${item.id}`);
    }
    
    return <div>
        <List items={shows} onItemClick={onShowClick} itemType={TileTypes.Show} />
    </div>;
}

export default withRouter(Home);
