import React from "react";
// Conmponents
import Card from "../components/Card";

class Popular extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7159e429659d95a41b81f7de34f57c58`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.results);
        this.setState({ movies: res.results });
      });
  }

  render() {
    return (
      <div>
        <h1>Popular</h1>
        {this.state.movies.map((movie) => {
          //   console.log(movie);
          return (
            <Card
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.title}
              releaseDate={movie.release_date}
              description={movie.overview}
            />
          );
        })}
      </div>
    );
  }
}

export default Popular;
