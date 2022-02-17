import React from "react";
// Conmponents
import Card from "../components/Card";
// CSS
import styled from "styled-components";

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
      <PopularBox>
        <h1>Popular</h1>
        <CardBox>
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
        </CardBox>
      </PopularBox>
    );
  }
}

const PopularBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export default Popular;
