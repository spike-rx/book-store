import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: Boolean(localStorage.getItem('darkMode'))
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    }
  }
})

export const asyncToggleTheme = () => (dispatch: any) => {
  const isDarkMode = Boolean(localStorage.getItem('darkMode'))
  localStorage.setItem('darkMode', (!isDarkMode).toString())
  dispatch(toggleTheme())
}

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
