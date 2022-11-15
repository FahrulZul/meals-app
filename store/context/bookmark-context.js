import { createContext, useState } from "react";

export const BookmarkContext = createContext({
    id: [],
    addBookmark: (id) => {},
    removeBookmark: (id) => {},
});

const BookmarkContextProvider = ({ children }) => {
    const [bookmarkIds, setBookmarkIds] = useState([]);

    const addBookmark = (id) => {
        setBookmarkIds((currentBookmarkIds) => [...currentBookmarkIds, id]);
    };

    const removeBookmark = (id) => {
        setBookmarkIds((currentBookmarkIds) =>
            currentBookmarkIds.filter((bookmarkId) => bookmarkId !== id)
        );
    };

    const value = {
        id: bookmarkIds,
        addBookmark: addBookmark,
        removeBookmark: removeBookmark,
    };

    return (
        <BookmarkContext.Provider value={value}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkContextProvider;
