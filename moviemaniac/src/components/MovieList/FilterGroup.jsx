import React from 'react'

const FilterGroup = ({minRate, onRatingClick, ratings}) => {

  
  return (
    <div className='align_center movie_list_fs'>
          <ul className='align_center movie_filter'>

          {ratings.map((rate) => (
            <li 
              className={minRate === rate ? 'movie_filter_item active' : 'movie_filter_item'} 
              key={rate}
              onClick={() => onRatingClick(rate)}>
              {rate}+ Star
            </li>
          ))}
          
          
          </ul>

    
        </div>
  )
}

export default FilterGroup