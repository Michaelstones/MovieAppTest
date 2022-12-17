import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>My Test App</h1>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 4.8125rem;
  width: 90rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 2.5rem; */
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: white;
    }
  }
`;

export default Header;
