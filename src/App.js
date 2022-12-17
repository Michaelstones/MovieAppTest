import Page from "./Components/Page";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Page />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

export default App;
