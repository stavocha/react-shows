import { configureStore, Action } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';
import { ThunkAction } from 'redux-thunk'

const store = configureStore({
 reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
 module.hot.accept('./rootReducer', () => {
   import('./rootReducer')
    .then((newRootReducer: any) => store.replaceReducer(newRootReducer));
 })
}

// export type AppDispatch = typeof store.dispatch
export type AppThunkType = ThunkAction<void, RootState, null, Action<string>>

export default store;
