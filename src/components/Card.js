import React from "react";
// CSS
import styled from "styled-components";

class Card extends React.Component {
  render() {
    return (
      <CardElement type="button" onClick={this.props.onClick}>
        <div className="img_box">
          <img src={this.props.image} alt="film poster" />
          <div className="title_box">
            <h1>{this.props.title}</h1>
            <h2>{this.props.releaseDate}</h2>
          </div>
        </div>
        <p>{this.props.description}</p>
      </CardElement>
    );
  }
}

const CardElement = styled.div`
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 224, 224, 1) 100%
  );
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  border: 2px groove white;
  border-radius: 10px;
  width: 40vw;
  height: 70vh;
  padding: 20px;
  .img_box {
    display: flex;
    img {
      height: 300px;
    }
    .title_box {
      padding-left: 20px;
    }
  }
`;

export default Card;
