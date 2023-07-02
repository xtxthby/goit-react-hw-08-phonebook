import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  // ставимо флажок з початковим фолс який 
  // описує операцію http запиту
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    // обробляємо register з файла де запрос на бекенд authOperations
    // перший коли все гаразд fulfilled і отримаємо стейт і подію
    // стейт це обєкт authInitialState
    [authOperations.register.fulfilled](state, action) {
      // при успішному запросі ми поверх в стейт запишемо 
      // подію де payload (нові дані) в user
      state.user = action.payload.user;
      // записуэмо також новий токін який ще не було
      state.token = action.payload.token;
      // також при успішній регістрації ставимо isLoggedIn = true
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // тут обробляємо розлогінення, при цьому action не використовується
    // так як з бекенду нічого не прийде тому ми скидаємо все в
    // початковий стан
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // при відправці запроса на беренд ми кусочек стейта ставимо в тру
    //  щоб не було при перезагрузці мигання інтерфейсу з відображенням
    // непотрібної загрузки інтерфейсу а потім коли він прийде то нижче
    // ставимо фолс
    [authOperations.refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
        },
    // і на всяк випадок тут при обробці помилки ставимо фолс
    [authOperations.refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;