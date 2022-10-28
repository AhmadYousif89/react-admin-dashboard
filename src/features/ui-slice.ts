import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface State {
  mode: 'light-theme' | 'dark-theme';
}

const storedTheme = <State['mode']>localStorage.getItem('mode');

const initialState: State = { mode: storedTheme ? storedTheme : 'dark-theme' };

const uiSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    toggleAppTheme(state) {
      const theme = state.mode === 'light-theme' ? 'dark-theme' : 'light-theme';
      localStorage.setItem('mode', theme);
      state.mode = theme;
    },
  },
});

export const { toggleAppTheme } = uiSlice.actions;
export const uiSelector = (state: RootState) => state.ui;
export default uiSlice.reducer;
