import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import CreateBook from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
   <Routes>
    <Route  path='/' element={<Home />} />
    <Route  path='/books/create' element={<CreateBook />} />
    <Route  path='/books/edit/:id' element={<EditBook />} />
    <Route  path='/books/delete/:id' element={<DeleteBook />} />
    <Route  path='/books/details/:id' element={<ShowBook />} />
   </Routes>
  )
}

export default App