import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger-simple';
import { persistStore, persistReducer } from 'redux-persist';
import storageLocal from 'redux-persist/lib/storage';
import AuthReducer from './Reducers/AuthReducer';
import MovieReducer from './Reducers/MovieReducer';

const persistConfig = {
  key: 'root',
  timeout: null,
  storage: storageLocal,
  whitelist: [
    'auth',
    'movies'
  ],
  blacklist: []
};
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger));
const reducers = combineReducers({
  auth: AuthReducer,
  movies:MovieReducer
});

const persistedReducers = persistReducer(persistConfig, reducers);

const Store = createStore(persistedReducers, enhancer);

export default Store;
export const persistor = persistStore(Store);