import React from "react";
import moment from "moment";
// Conmponents
import Card from "../components/Card";
// CSS
import "../App.css";
import styled from "styled-components";

// Dates
const today = moment().format("YYYY-MM-DD");
// console.log(today);
const last_week = moment().add(-7, "days").format("YYYY-MM-DD");
// console.log(last_week);

class WeeklyBattle extends React.Component {
  constructor() {
    super();

    this.state = {
      apiLoaded: false,
      movies: [],
      currentBattle: 0,
      selectedMovies: [],
      favorites: localStorage.getItem("favorites"),
    };
  }

  componentDidMount() {
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${last_week}&primary_release_date.lte=${today}&api_key=7159e429659d95a41b81f7de34f57c58`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ movies: res.results });
        this.setState({ apiLoaded: true });
      });
  }

  handleClick() {
    localStorage.setItem(
      "favorites",
      JSON.stringify(this.state.selectedMovies)
    );
    if (
      this.state.currentBattle + 2 !== this.state.movies.length &&
      this.state.currentBattle + 2 !== undefined
    ) {
      this.setState((prevState) => ({
        currentBattle: prevState.currentBattle + 2,
      }));
      const select = this.state.selectedMovies;
      select.push(this.state.movies[this.state.currentBattle].id);
      this.setState({
        selectedMovies: select,
      });
      // localStorage.setItem(
      //   this.state.movies[this.state.currentBattle].id,
      //   JSON.stringify(this.state.movies[this.state.currentBattle].id)
      // );
    } else {
      const noMoreMovies = document.getElementById("noMoreMovies");
      noMoreMovies.style.display = "flex";
      console.log(localStorage);
      // return console.log("Done");
    }
  }

  render() {
    const movie1 = this.state.movies[this.state.currentBattle];
    const movie2 = this.state.movies[this.state.currentBattle + 1];
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Weekly Battle</h1>
        {this.state.apiLoaded ? (
          <BattleBox>
            <Card
              className="movieBattle"
              key={movie1.id}
              onClick={() => this.handleClick()}
              title={movie1.title}
              image={`https://image.tmdb.org/t/p/w300/${movie1.poster_path}`}
              releaseDate={movie1.release_date}
              description={movie1.overview}
            />
            <Card
              className="movieBattle"
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
  .movieBattle:hover {
    border: 2px groove #9ca0c3;
    box-shadow: 2px 20px 15px -7px #000000, 6px 6px 15px 12px rgba(0, 0, 0, 0);
    transform: scale(1.02);
  }
`;

export default WeeklyBattle;
