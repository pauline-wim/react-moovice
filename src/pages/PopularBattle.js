import React from "react";
// Components
import Card from "../components/Card";

class PopularBattle extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      currentBattle: 0,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7159e429659d95a41b81f7de34f57c58`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({ movies: res.results });
      });
  }

  render() {
    return (
      <div>
        <h1>Popular Battle</h1>
        {this.state.movies.map((movie, i) => {
          if (i < 2) {
            return (
              <Card
                image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                title={movie.title}
                releaseDate={movie.release_date}
                description={movie.overview}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default PopularBattle;
