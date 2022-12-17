import { useEffect, useState } from "react";
import styled from "styled-components";

function Search() {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (search === "") {
      return;
    } else {
      setSearchTerm(search);
    }
  };

  const getSearch = async () => {
    const res = await fetch(
      ` http://www.omdbapi.com/?s=${search}&apikey=dda5cc37`
    );
    const data = await res.json();
    const data1 = data.Search;
    setSearchTerm((prev) => {
      return [...prev, data1];
    });
  };

  useEffect(() => {
    getSearch();
  }, []);

  return (
    <Container>
      <h3>Search</h3>
      <input
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <h1>{search}</h1>

      {searchTerm.length > 0 &&
        searchTerm.map((item, ind) => {
          console.log(item);
          return (
            search && (
              <Card key={ind}>
                {/* <div>
                  <img src={item.Poster} alt="name" />
                  <Gradient />
                  <h4>{item.Title}</h4>
                </div> */}
              </Card>
            )
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 67px 30px 48px 30px;

  h3 {
    font-weight: 400;
  }
  input {
    width: 100%;
    height: 57px;
    @media (max-width: 768px) {
      height: 70px;
      height: 50px;
    }
  }
`;

const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  min-height: 25rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-gap: 1rem;
  grid-auto-flow: dense;

  div {
    div {
      width: 19rem;
      height: 19rem;

      img {
        width: 100%;
        left: 0;
        height: 100%;
        border-radius: 0.75rem;
        object-fit: cover;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
      }
      h4 {
        position: absolute;
        top: 50%;
        color: #e1d9d1;
        font-size: 2rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-overflow: ellipsis;
        word-break: break-all;
        word-wrap: break-word;
      }
    }
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: auto;
  border-radius: 0.75rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`;

export default Search;
