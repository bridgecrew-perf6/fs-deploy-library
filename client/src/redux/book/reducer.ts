import { BooksDocument } from '../../type/types';
import {
  Actions,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_ERROR,
} from './action';

export type InitialStateBook = {
  books: BooksDocument[]
  error: Error | any
  createBook: BooksDocument | null
  createBookError: Error | any
};

const initialState: InitialStateBook = {
  books: [],
  error: null,
  createBook: null,
  createBookError: null
};

const reducer = (state = initialState, action: Actions): InitialStateBook => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case CREATE_BOOK_SUCCESS:
        return {
          ...state, 
          createBook: action.payload
        }
        case CREATE_BOOK_ERROR:
          return {
            ...state,
            createBookError: action.payload
          }

    default:
      return state;
  }
};

export default reducer;
