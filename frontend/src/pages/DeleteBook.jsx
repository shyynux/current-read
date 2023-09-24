import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    console.log("letsee the id", id);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert('something is messed up, check console');
      console.log(error);
    });
  };

  return (
    <div className='p-4'>
    <BackButton />
    <h6 className='text-3xl my-4'>you're about to delete a book. </h6>
    {loading ? <Spinner /> : '' }
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
      <h6 className='text-xl mr-4 text-gray-500'>You sure about deleting
      this book?</h6>
    <button className='p-2 bg-sky-300 m-8 w-full' onClick={handleDeleteBook}>
      yes, delete this.
    </button>
    </div>
    </div>
  )
}

export default DeleteBook