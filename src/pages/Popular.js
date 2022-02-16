import React from "react";

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
        console.log(res);
        this.setState({ movies: res });
      });
  }

  render() {
    return (
      <div>
        <h1>Popular</h1>
      </div>
    );
  }
}

export default Popular;
