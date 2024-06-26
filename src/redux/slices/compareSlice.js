import { createSlice, createSelector } from "@reduxjs/toolkit";

const compareSlice = createSlice({
    name: "compare",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const getItemsSelector = createSelector(
    (state) => state.compare,
    (state) => state
);

export const { addItem } = compareSlice.actions;

export default compareSlice.reducer;