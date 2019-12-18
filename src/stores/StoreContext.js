import React from 'react';

import { createActorStore } from './ActorStore';
import { createShowsStore } from './ShowsStore';

const Stores = {
    actorStore: createActorStore(),
    showsStore: createShowsStore(),
};

export default Stores;

export const storeContext = React.createContext({});

export const StoreProvider = ({ children }) => {
    return <storeContext.Provider value={Stores}>{children}</storeContext.Provider>
}
