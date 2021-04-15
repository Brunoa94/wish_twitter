import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        activeNavbar: "Home"
    },
    reducers: {
        setActiveNavbar: (state, action) => {
            state.activeNavbar = action.payload
        }
    }
})

export const { setActiveNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;