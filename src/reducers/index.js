import { combineReducers } from 'redux';
import BooksReducer from './reducers_books'

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
