import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import carsRentSlice from './carsRentSlice/carsRentSlice';
import favoriteCarsSlice from './favoriteCarsSlice/favoriteCarsSlice';

const persistConfig = {
  key: 'favorite',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  favoriteCarsSlice.reducer
);

const store = configureStore({
  reducer: {
    carsRent: carsRentSlice.reducer,
    favoriteCars: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

const redux = { store, persistor };

export default redux;
