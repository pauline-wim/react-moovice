import React from "react";
// Components
import Card from "../components/Card";
// CSS
import styled from "styled-components";

class PopularBattle extends React.Component {
  constructor() {
    super();

    this.state = {
      apiLoaded: false,
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
        this.setState({ apiLoaded: true });
      });
  }

  // componentDidUpdate(_prevProps, prevState) {
  //   if (prevState.currentBattle !== this.state.currentBattle) {
  //     console.log(this.state.currentBattle);
  //   }
  // }

  handleClick() {
    this.setState((prevState) => ({
      currentBattle: prevState.currentBattle + 2,
    }));
    // console.log(this.state.currentBattle);
  }

  render() {
    const movie1 = this.state.movies[this.state.currentBattle];
    const movie2 = this.state.movies[this.state.currentBattle + 1];
    return (
      <div>
        <h1>Popular Battle</h1>
        {this.state.apiLoaded ? (
          <BattleBox>
            <Card
              key={movie1.id}
              onClick={() => this.handleClick()}
              image={`https://image.tmdb.org/t/p/w300/${movie1.poster_path}`}
              title={movie1.title}
              releaseDate={movie1.release_date}
              description={movie1.overview}
            />
            <Card
              key={movie2.id}
              onClick={() => this.handleClick()}
              image={`https://image.tmdb.org/t/p/w300/${movie2.poster_path}`}
              title={movie2.title}
              releaseDate={movie2.release_date}
              description={movie2.overview}
            />
          </BattleBox>
        ) : (
          <p>loading</p>
        )}
      </div>
    );
  }
}

const BattleBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default PopularBattle;
