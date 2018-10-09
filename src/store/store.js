// redux dependencies
import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// redux-persist dependencies
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './reducers';

const persistConfig = {
  key: 'gymnasium-code-challenge-root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(
      thunk,
      logger,
    ),
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
