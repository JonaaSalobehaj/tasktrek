import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import MovieList from './components/MovieList/MovieList'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
    
      <MovieList/>
      
    </div>// i have noticed that ususally in the app.jsx is only written the layout such as the header, in our case the nav bar and the main section
  )
}

export default App