import { combineReducers } from '@reduxjs/toolkit'
import searchReducer from './features/search/searchSlice';
import showReducer from './features/showDetails/showDetailsSlice';

const rootReducer = combineReducers({
 search:searchReducer,
 show:showReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer
