import { Dispatch } from 'redux';

import * as api from '../../api-axios';
import { BooksDocument } from '../../type/types';

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const CREATE_BOOK_ERROR = 'CREATE_BOOK_ERROR';

export const fetchBooksFromRedux = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.getBooksAxios().then((res) => {
        return res.data;
      });
      dispatch(fetchBooks(response));
    } catch (error) {
      dispatch(fetchBooksError(error as Error));
    }
  };
};

const fetchBooks = (
  response: BooksDocument[]
): GenericAction<typeof FETCH_BOOKS_SUCCESS, BooksDocument[]> => {
  return { type: FETCH_BOOKS_SUCCESS, payload: response };
};

const fetchBooksError = (
  error: Error
): GenericAction<typeof FETCH_BOOKS_ERROR, Error> => {
  return { type: FETCH_BOOKS_ERROR, payload: error };
};

//create book
export const createBook = (bookObj:BooksDocument) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.createBookAxios(bookObj).then((res) => {
        return res.data;
      });
      dispatch(bookCreation(response));
    } catch (error) {
      dispatch(bookCreationError(error as Error));
    }
  };
};

const bookCreation = (
  response: BooksDocument
): GenericAction<typeof CREATE_BOOK_SUCCESS, BooksDocument> => {
  return { type: CREATE_BOOK_SUCCESS, payload: response };
};

const bookCreationError = (
  error: Error
): GenericAction<typeof CREATE_BOOK_ERROR, Error> => {
  return { type: CREATE_BOOK_ERROR, payload: error };
};



type GenericAction<T, K> = {
  type: T;
  payload: K;
};

export type Actions =
  | ReturnType<typeof fetchBooks>
  | ReturnType<typeof fetchBooksError>
  | ReturnType<typeof bookCreation>
  | ReturnType<typeof bookCreationError>
