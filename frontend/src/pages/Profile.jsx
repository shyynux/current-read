import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="p-4 bg-pastel-green font-mono h-full w-full">
      <div className='flex flex-col my-4 ml-4 mr-4 pb-10'>
        <header className='flex items-center justify-between'>
          <Link to="/" className='w-2/3 text-2xl font-bold '>📚 current-read</Link>
        </header>
      </div>
      <div className='flex flex-row p-4 justify-between'>
        <div className='w-2/3 font-bold'> Welcome to your book-shelf cady</div>
        <div className=''>Cady Heron </div>
      </div>
      <div className='flex flex-row p-4 justify-between'>
      <div className='w-4/5'>all the book details</div>
      <div className='flex-col items-center'>
        <img src="https://source.unsplash.com/random/200x200/?girl" className="w-1/2 shadow-lg" alt="Image" />
        <div className=''> 🌸 🎀 🥥 🧸 ☁ </div>
        <div className='py-4 w-1/2'> hey i , love books, and movies. no people pls. </div>
        <div className=''> Last Online: Now </div>
     </div>
      </div>
      </div>
  )
}

export default Profile