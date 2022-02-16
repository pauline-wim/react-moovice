import React from "react";
// Components
import Card from "../components/Card";
// CSS
import styled from "styled-components";

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
        // console.log(res.results);
        this.setState({ movies: res.results });
      });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.currentBattle !== this.state.currentBattle) {
      console.log(this.state.currentBattle);
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      currentBattle: prevState.currentBattle + 1,
    }));
    console.log(this.state.currentBattle);
  }

  render() {
    return (
      <div>
        <h1>Popular Battle</h1>
        <BattleBox>
          {this.state.movies.map((movie, i) => {
            if (i < 2) {
              return (
                <Card
                  key={movie.id}
                  onClick={() => this.handleClick()}
                  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  description={movie.overview}
                />
              );
            }
          })}
        </BattleBox>
      </div>
    );
  }
}

const BattleBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default PopularBattle;
