import React from "react";
import styled from "styled-components";

function HeroImg() {
  return (
    <Container>
      <img src="./img/heroImg.jpg" />
      <div>
        <Gradient />
        <h1>
          watch <span>something</span> <span>incredible</span>
        </h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 34.375rem;
  width: 90rem;
  margin: 0 auto;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    /* @media (max-width: 900px) {
      width: 80%;
      object-fit: cover;
      object-position: bottom;
    }
    @media (max-width: 768px) {
      width: 60%;
      object-fit: cover;
      object-position: bottom;
    } */
  }
  div {
    position: absolute;
    top: 6.25rem;
    left: 4.8rem;
    font-size: 2rem;
    h1 {
      color: white;
      text-decoration: none;
      text-transform: capitalize;
      line-height: 1.3;
      letter-spacing: 1.3px;
      span {
        display: block;
      }
    }

    /* @media screen and (min-width: 769px) {
      margin: 0 auto;
      position: absolute;
      font-size: 1rem;
      text-align: center;
      left: 50%;
      transform: translate(-50%, 0);
    } */

    /* @media screen and (max-width: 768px) {
      margin: 0 auto;
      position: absolute;
      font-size: 1rem;
      text-align: center;
      left: 50%;
      transform: translate(-50%, 0);
    } */
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  border: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;

export default HeroImg;
