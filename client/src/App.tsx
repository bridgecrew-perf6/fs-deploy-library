import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Auth from './components/Auth';
import AppBar from './components/AppBar';
import FormBook from './components/FormBook';
import FormAuthor from './components/FormAuther';
import BorrowBook from './pages/BorrowBook';

function App() {
  return (
    <div className='App'>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/formBook'
          element={
            <Auth>
              <FormBook />
            </Auth>
          }
        />
        <Route
          path='/formAuthor'
          element={
            <Auth>
              <FormAuthor />
            </Auth>
          }
        />
        <Route
          path='/profile/:userId'
          element={
            <Auth>
              <Profile />
            </Auth>
          }
        />
        <Route
          path='/borrow'
          element={
            <Auth>
              <BorrowBook />
            </Auth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
