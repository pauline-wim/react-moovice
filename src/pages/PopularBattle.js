import React from "react";
// Components
import Card from "../components/Card";
// CSS
import "../App.css";
import styled from "styled-components";

class PopularBattle extends React.Component {
  constructor() {
    super();

    this.state = {
      apiLoaded: false,
      movies: [],
      currentBattle: 0,
      favorites: localStorage.getItem("favorites"),
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
  //     console.log(this.state.movies[this.state.currentBattle].title);
  // if (this.state.movies[this.state.currentBattle].title === undefined) {
  //   const noMoreMovies = document.getElementById("noMoreMovies");
  //   noMoreMovies.classList.remove("endList");
  //   return console.log("Done");
  // }
  // if (this.state.currentBattle === 18 && Card.id === undefined) {
  //   const noMoreMovies = document.getElementById("noMoreMovies");
  //   // const movieCard1 = document.getElementById("card1");
  //   // const movieCard2 = document.getElementById("card2");
  //   // movieCard1.classList.remove("movieCard1");
  //   // movieCard2.classList.remove("movieCard2");
  //   noMoreMovies.classList.remove("endList");
  //   return console.log("Done");
  // }

  // if (this.state.currentBattle + 2 === this.state.movies.length) {
  //   const movieCard1 = document.getElementById("card1");
  //   const movieCard2 = document.getElementById("card2");
  //   movieCard1.classList.remove("movieCard1");
  //   movieCard2.classList.remove("movieCard2");
  //   const noMoreMovies = document.getElementById("noMoreMovies");
  //   noMoreMovies.classList.remove("endList");
  //   return console.log("Done");
  // }
  //   }
  // }

  handleClick() {
    if (
      this.state.currentBattle + 2 !== this.state.movies.length &&
      this.state.currentBattle + 2 !== undefined
    ) {
      this.setState((prevState) => ({
        currentBattle: prevState.currentBattle + 2,
      }));
      localStorage.setItem(
        [this.state.currentBattle],
        this.state.movies[this.state.currentBattle].title
      );
      // console.log(this.state.currentBattle);
      // console.log(this.state.movies[this.state.currentBattle].title);
    } else {
      const noMoreMovies = document.getElementById("noMoreMovies");
      noMoreMovies.style.display = "flex";
      console.log(localStorage);
      return console.log("Done");
    }
  }

  render() {
    const movie1 = this.state.movies[this.state.currentBattle];
    const movie2 = this.state.movies[this.state.currentBattle + 1];
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Popular Battle</h1>
        {this.state.apiLoaded ? (
          <BattleBox>
            <Card
              // id="card1"
              // className="movieCard1"
              key={movie1.id}
              onClick={() => this.handleClick()}
              title={movie1.title}
              image={`https://image.tmdb.org/t/p/w300/${movie1.poster_path}`}
              releaseDate={movie1.release_date}
              description={movie1.overview}
            />
            <Card
              // id="card2"
              // className="movieCard2"
              key={movie2.id}
              onClick={() => this.handleClick()}
              title={movie2.title}
              image={`https://image.tmdb.org/t/p/w300/${movie2.poster_path}`}
              releaseDate={movie2.release_date}
              description={movie2.overview}
            />
          </BattleBox>
        ) : (
          <p>loading</p>
        )}
        <div id="noMoreMovies">
          <p className="endList">Vous avez parcouru tous les films !</p>
        </div>
      </div>
    );
  }
}

const BattleBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  /* .movieCard1 {
    display: block;
  }
  .movieCard2 {
    display: block;
  } */
`;

export default PopularBattle;
