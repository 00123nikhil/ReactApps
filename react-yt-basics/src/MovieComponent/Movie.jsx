const Movie = (Props) => {
  return (
    <>
      <div className="movie">
        <img src={Props.Poster} alt="" />
        <p>Name: {Props.Title}</p>
        <p>Year: {Props.Year}</p>
      </div>
    </>
  );
};

export default Movie;
