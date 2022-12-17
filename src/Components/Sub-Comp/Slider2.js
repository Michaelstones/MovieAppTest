import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";

function Slider1() {
  const [popular1, setPopular1] = useState([]);

  const check = localStorage.getItem("popular1");

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    if (check) {
      setPopular1(JSON.parse(check));
    } else {
      const res = await fetch(
        ` http://www.omdbapi.com/?s=love&apikey=dda5cc37`
      );
      const data = await res.json();
      localStorage.setItem("popular1", JSON.stringify(data.Search));
      setPopular1(data.Search);
      console.log(data.Search);
    }
  };
  return (
    <Container>
      <h1>Love</h1>
      <Wrapper>
        <Splide
          options={{
            speed: 900,
            autoplay: true,
            arrows: false,
            perPage: 4,
            breakpoints: {
              1440: {
                perPage: 4,
              },
              1000: {
                perPage: 3,
                gap: "1.5rem",
              },
              768: {
                perPage: 1,
                gap: "2.5rem",
              },
              600: {
                perPage: 1,
                gap: "2.5rem",
              },
            },
            drag: "free",
            pagination: false,
            gap: "0.625rem",
            width: "100%",
            rewind: true,
            focus: "center",
            interval: 1500,
          }}
        >
          {popular1.map((item) => {
            return (
              <SplideSlide key={item.imdbID}>
                <Card>
                  <div>
                    <img
                      src={item.Poster ? item.Poster : "./img/linkedin.png"}
                      alt="name"
                    />
                    <Gradient />
                    <h4>{item.Title}</h4>
                  </div>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  width: 90rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.125rem;
  }
`;

const Wrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 25rem;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    width: 19rem;
    height: 19rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      object-fit: cover;
    }
    h4 {
      position: absolute;
      top: 50%;
      color: #e1d9d1;
      font-size: 2rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      text-overflow: ellipsis;
      /* word-break: break-all;
      word-wrap: break-word; */
    }
  }
`;
const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  border-radius: 0.75rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`;
export default Slider1;
