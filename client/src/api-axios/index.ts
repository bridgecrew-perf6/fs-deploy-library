import axios from 'axios'
import customAPI from './axiosConfig'
import {AuthorsDocument, BooksDocument,BorrowInfoType, User} from '../type/types'

const API = axios.create({baseURL: 'http://localhost:5001/api/v1'})

//books
export const getBooksAxios = async() => await API.get('/books');
export const createBookAxios = async(data:BooksDocument) => await customAPI.post(`/books`, data)
export const borrowBookAxios = async(data:BorrowInfoType) => await customAPI.post('/books/borrow', data)

//user
export const getUserAxios = async(userId:any) => await customAPI.get(`/users/${userId}`)
export const returnBookAxios = async(userId: any, borrowId: any) => await customAPI.delete(`/users/borrow/${userId}/${borrowId}`)

//user authentication 
export const googleLoginApi = async(googleToken:any) => await API.post('/users/google-login', googleToken)

//author
export const getAuthorsAxios = async() => await customAPI.get('/authors');
export const createAuthorAxios = async(data:AuthorsDocument) => await customAPI.post(`/authors`, data)