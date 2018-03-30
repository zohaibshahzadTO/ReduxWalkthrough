import { combineReducers } from 'redux';
import BooksReducer from './reducers_book';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
