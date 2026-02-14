import React from 'react'

const moviecard = ({movie:{ title
    ,vote_average,poster_path,release_date,orignal_language
}}) => {
  return (
    <div className="moviecard">
        <img 
        src={poster_path ? 
        `https://image.tmdb.org/t/p/w500/${poster_path}` :'/noposter.png/'>
    </div>
  )
}

export default moviecard



