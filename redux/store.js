import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './store/books';
import categoriesReducer from './store/categories';
import carouselReducer from './store/carousel';
import commentsReducer from './store/comments';
import usersReducer from './store/users'
import libraryReducer from './store/library'

export default configureStore({
  reducer: {
    books: rootReducer,
    categories: categoriesReducer,
    carousel: carouselReducer,
    comments: commentsReducer,
    users:usersReducer,
    library:libraryReducer
  },
});
