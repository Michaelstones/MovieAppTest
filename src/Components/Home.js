import React from "react";
import styled from "styled-components";
import Header from "./Sub-Comp/Header";
import HeroImg from "./Sub-Comp/HeroImg";
import Search from "./Sub-Comp/Search";
import Slider1 from "./Sub-Comp/Slider1";
import Slider2 from "./Sub-Comp/Slider2";

function Home() {
  return (
    <Container>
      <Header />
      <HeroImg />
      <Search />
      <Slider1 />
      <Slider2 />
    </Container>
  );
}
const Container = styled.div`
  margin: 0 auto;
`;
export default Home;
