function MovieListItem(props) {
  return (
    <div>
      { props.movieData.isNew && <h1>NEW</h1> }
      <h3>
        {props.movieData.title} released {props.movieData.yearReleased}
      </h3>
      I've watched {props.movieData.watchedCount} times
    </div>
  )
}

export default MovieListItem;