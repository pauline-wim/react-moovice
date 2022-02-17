import React from "react";
// Conmponents
import Card from "../components/Card";
// CSS
import styled from "styled-components";

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      fetchedMovie: [],
      favIDs: this.getStorage(),
    };
  }

  getStorage() {
    const favList = localStorage.getItem("favorites");
    return JSON.parse(favList);
  }

  getMovie(id) {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=7159e429659d95a41b81f7de34f57c58`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);

        const mov = this.state.fetchedMovie;
        mov.push(res);
        this.setState({ movies: mov });

        // this.setState({ movies: res });
        // this.setState((prevState) => {
        //   movies: prevState.movies + res;
        // });
      });
  }

  componentDidMount() {
    this.state.favIDs.map((id) => {
      this.getMovie(id);
    });
    // console.log(this.state.movies);
  }

  // componentDidUpdate(_propsState, prevState) {
  //   if (prevState.movies !== this.state.movies) {
  //     console.log(this.state.movies);
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <CardBox>
          {this.state.movies.map((movie) => {
            console.log(movie);
            return (
              <Card
                key={movie.id}
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                releaseDate={movie.release_date}
                description={movie.overview}
              />
            );
          })}
        </CardBox>
      </div>
    );
  }
}

const CardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export default Favorites;
