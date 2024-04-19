import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'themeSlice',

    initialState: {
        darkMode: false
    },

    reducers: {
        setDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

// Action creators are generated for each case reducer function
export const { setDarkMode } = themeSlice.actions

export default themeSlice.reducer