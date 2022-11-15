import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState: {
        mealIds: [],
    },
    reducers: {
        addBookmark: (state, action) => {
            state.mealIds.push(action.payload.id);
        },
        removeBookmark: (state, action) => {
            state.mealIds.splice(state.mealIds.indexOf(action.payload.id), 1);
        },
    },
});

export const addBookmark = bookmarkSlice.actions.addBookmark;
export const removeBookmark = bookmarkSlice.actions.removeBookmark;

export default bookmarkSlice.reducer;
