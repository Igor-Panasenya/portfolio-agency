import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeWorkNavItem: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveWorkNavItem(state, action) {
            state.activeWorkNavItem = action.payload
        },
    },
})

export const { setActiveWorkNavItem } = filterSlice.actions

export default filterSlice.reducer