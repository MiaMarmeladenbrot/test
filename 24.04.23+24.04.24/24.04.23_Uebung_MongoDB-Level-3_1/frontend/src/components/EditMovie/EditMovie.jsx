import { useContext, useState } from "react";
import "./EditMovie.css";
import { FetchMoviesContext } from "../../context/Context";

const EditMovie = ({ movieDetails, showEditForm, setShowEditForm }) => {
  // global context for fetched movies
  const { movies, setMovies } = useContext(FetchMoviesContext);

  // states for input-fields
  const [title, setTitle] = useState(movieDetails.title);
  const [year, setYear] = useState(movieDetails.year);
  const [director, setDirector] = useState(movieDetails.director);
  const [genre, setGenre] = useState(movieDetails.genre);
  const [rating, setRating] = useState(movieDetails.rating);
  const [plot, setPlot] = useState(movieDetails.plot);

  console.log(title);
  console.log(year);
  console.log(plot);

  // function to save edited movie details
  const editMovie = (e) => {
    e.preventDefault();

    const movieUpdateInfo = {
      title,
      year,
      director,
      // genre,
      rating,
      plot,
    };

    fetch(`http://localhost:3007"/api/v1/movies/${movieDetails._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieUpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className={showEditForm ? "editMovie show" : "editMovie"}>
      <h2>Edit this movie</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        type="text"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />

      {/* <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      /> */}

      <input
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <textarea
        name="plot"
        id="plot"
        cols="30"
        rows="10"
        onChange={(e) => setPlot(e.target.value)}
      >
        {plot}
      </textarea>

      <button className="green-btn" onClick={editMovie}>
        Submit changes
      </button>
    </form>
  );
};

export default EditMovie;
