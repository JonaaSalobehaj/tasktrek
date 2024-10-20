import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import "./MovieList.css"
import Fire from "../../assets/fire.png"
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([])
  const [minRate, setMinRate] = useState(0)
  const [sort, setSort] = useState({
    by: "default",
    order: "asc"
  })

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
 
  useEffect(() => {
    if(sort !== "default"){
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]) //1st parameter we pass our array which we want to sort, at the second parameter we pass array of properties which we are going to sort and at the 3rd par we pass asc or desc 
      setFilterMovies(sortedMovies)
    }
  }, [sort])//1st arg is call back function, 2nd is dependency array "sort"
 
  const fetchMovies = async()=>{
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1f9dae1de8bb770fdd100808a961fe9b");
    const data = await response.json()//converts them to a json response 
    setMovies(data.results)
    setFilterMovies(data.results)
  }

  const handleSort = (e) => {
    const {name, value} = e.target
    setSort(prev => {
      return {...prev, [name]:value}
    
    })
    
    console.log(sort)
  }

  return (
    <section className='movie_list'>
      <header className="align_center movie_list_header">
        <h2 className='align_center movie_list_heading'>Popular<img src={Fire} alt='fire emoji' className='navbar_emoji'/></h2>
        <div className='align_center movie_list_fs'>

        <FilterGroup 
        minRate={minRate} 
        onRatingClick={handleFilters}
        ratings={[8,7,6]}
        />


        <select name='by' id='' className='movie_sorting' onChange={handleSort} value={sort.by}>
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select name='order' id='' className='movie_sorting' onChange={handleSort} value={sort.order}>
            <option value="asc">Ascending</option>
            <option value="des">Descending</option>
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