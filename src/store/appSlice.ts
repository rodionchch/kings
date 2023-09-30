import {createSlice} from '@reduxjs/toolkit';

interface AppState {
  auth: boolean;
  saved: [];
}

const initialState: AppState = {
  auth: true,
  saved: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAuth: (state, {payload}) => {
      state.auth = payload;
    },
    setSaved: (state, {payload}) => {
      if (!state.saved.find(el => el.id === payload.id)) {
        state.saved = [...state.saved, payload];
      } else {
        state.saved = state.saved.filter(el => el.id !== payload.id);
      }
    },
  },
});

export const {setAuth, setSaved} = appSlice.actions;

export default appSlice.reducer;
