import { configureStore } from "@reduxjs/toolkit";

import bookmarksReducer from "./bookmark";

export const store = configureStore({
    reducer: {
        bookmarkMeals: bookmarksReducer,
    },
});
