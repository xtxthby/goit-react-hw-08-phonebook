
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contacts-slice';
// import { filtersReducer } from './filter/filter-slice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contacts-slice';
import { filtersReducer } from './filter/filter-slice';



const authPersistConfig = {
  key: 'auth',
  storage,
  // ми хочемо зберегти тільки свойство токен в локал сторадж
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // devTools: process.env.NODE_ENV === 'developent',
});

export const persistor = persistStore(store);