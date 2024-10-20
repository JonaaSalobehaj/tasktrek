import React, { useEffect, useState } from 'react'
import "./MovieList.css"
import Fire from "../../assets/fire.png"
import MovieCard from './MovieCard'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([])
  const [minRate, setMinRate] = useState(0)

  const handleFilters = (rate) => {
    if(rate === minRate){
      setMinRate(0)
      setFilterMovies(movies)
    }
    else{
    setMinRate(rate)
    const filtered = movies.filter(movie => movie.vote_average >= rate)
    setFilterMovies(filtered)
    }
  }
  

  useEffect(()=>{
    fetchMovies();
  }, []) ;//the empty array makes sure it is running only once 
 
  const fetchMovies = async()=>{
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1f9dae1de8bb770fdd100808a961fe9b");
    const data = await response.json()//converts them to a json response 
    setMovies(data.results)
    setFilterMovies(data.results)
  }


  return (
    <section className='movie_list'>
      <header className="align_center movie_list_header">
        <h2 className='align_center movie_list_heading'>Popular<img src={Fire} alt='fire emoji' className='navbar_emoji'/></h2>

        <div className='align_center movie_list_fs'>
          <ul className='align_center movie_filter'>
            <li className='movie_filter_item active' onClick={()=>handleFilters(8)}>8+ Star</li>
            <li className='movie_filter_item' onClick={()=>handleFilters(7)}>7+ Star</li>
            <li className='movie_filter_item' onClick={()=>handleFilters(6)}>6+ Star</li>
          </ul>

          <select name='' id='' className='movie_sorting'>
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name='' id='' className='movie_sorting'>
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className='movie_cards'>
        {
          filterMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>) //movie itself display the details we have no need for movie items
        }
      
      </div>
    </section>
  )
}

export default MovieList