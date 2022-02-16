import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="film poster" />
        <h1>{this.props.title}</h1>
        <h2>{this.props.releaseDate}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
