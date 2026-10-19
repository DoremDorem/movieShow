import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Favourite from './pages/Favourite'
import MyBooking from './pages/MyBooking'
import MovieDetail from './pages/MovieDetail'
import Footer from './components/Footer'
import ProtectAuth from './pages/ProtectAuth'
const App = () => {
  const isAdmin=useLocation().pathname.startsWith("/admin");
  return (
    <>
    {!isAdmin&& <Navbar/>}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie/>} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/my-booking" element={<MyBooking />} />
      <Route path="/movie-details/:movie_id" element={<MovieDetail />} />
      <Route path='/protected' element={<ProtectAuth/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>  
    {!isAdmin&& <Footer/>}
    </>
  )
}

export default App
