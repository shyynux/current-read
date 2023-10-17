import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { account } from '../../../backend/appwrite'


const Home = () => {

  const [userName, setUserName] = useState(null);
  const promise = account.get();

  promise.then(function (response) {
    console.log('yo whats mah name'); // Success
    console.log(response.name);
    setUserName(response.name);
  }, function (error) {
      console.log(error); // Failure
  });

  return (
    <div className="p-4 bg-pastel-green font-mono h-full w-full">
      <div className='flex flex-col my-4 ml-4 mr-4 pb-10'>
        <header className='flex items-center justify-between'>
          {/* <h2 className='w-2/3 text-2xl font-bold '>current-read</h2>
          <h3 className='flex text-l space-x-4 hover:font-serif'>search</h3>
          <h3 className='flex text-l space-x-2 hover:font-serif'>quick-add</h3>
          <h3 className='flex text-l space-x-2 hover:font-serif' >about cr</h3>
          {/* <h3 className='flex text-l space-x-2 font-bold hover:font-serif'>
          cady heron</h3> */} 
          <Link to="/" className='w-2/3 text-2xl font-bold '>📚 current-read</Link>
          <Link className='flex text-l space-x-4 hover:font-serif'>search</Link>
          <Link to="http://localhost:5555/books/" className='flex text-l space-x-2 hover:font-serif'>quick-add</Link>
          <Link className='flex text-l space-x-2 hover:font-serif' >about cr</Link>
          <Link to="/username"
          className='flex text-l space-x-2 font-bold hover:font-serif'>
          {/* <p>
          {loggedInUser ? `${loggedInUser.name}` : 'please login'}
          </p> */}
          <p>{userName}</p>
            </Link>
        </header>
      </div>
      <main className='flex flex-row h-full w-full'>
          <div className='w-1/4'>
            <div className='h-2/5 flex-grow'></div>
            <div className='justify-end'>
            <img src="/src/assets/girl-art.gif" className="" alt="Image" />
            </div>
          </div>
          <div className='flex-1 p-4'>
            <img src='https://source.unsplash.com/random/435x300/?book' alt='a random image'
            className='rounded-lg shadow-lg'></img>
            <p className='py-2 text-slate-800'>Books are portals to other worlds, 
            where we can explore new ideas, 
            meet fascinating characters, 
            and learn about different cultures.
             They can transport us to faraway lands, 
             teach us about the past, and help us understand the present. 
             Books are also a source of comfort and inspiration,
              books are best friends to the humanity, no complaints,
              no demands.
               </p>
          </div>
          <div className='flex-1 flex flex-col my-4'>
            <div class="bg-lime-200 p-4 rounded-lg shadow-lg">
              <h2 className='font-bold'>🦄 friends</h2>
              <p className="moving-text">
                <ul>
                  <li>- this line will come from the backend</li>
                  <li>- this is possible only after authentication</li>
                  <li>- a list of what friends are upto</li></ul></p>
            </div> 
            <div class="bg-orange-200 p-4 my-4 rounded-lg shadow-lg">
              <h2 className='font-bold'> 🌎 everyone</h2>
              <p className='moving-text'>
               <ul>
                  <li>- activities of people around the world</li>
                  <li>- everyone can see this</li>
                  <li>- u do not need to sign up</li>
                  <li>- or be the person's friend</li>
                  </ul></p>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Home


// We have two conditions

// if the user is not logged in 
// show the home page with everything except
// amigos tab
// also the toolbar will show
// login sign up

// if the user is logged in
// show the homepage as designed

// pre procesing to be done
// pre load the blog (text + image) from the database
// pre load the latest updates like
// who added what (last 15), and keep it moving
// if user is logged in
// we need to pull the amigos info as well(last 15)


// Steps
// lets first make the normal homepage
// after authentication, we will fix it
// according to logged in or not