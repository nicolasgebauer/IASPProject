import React from "react";
import styled from "styled-components";
import { darkTheme } from "../styles/theme";
import Search from "./Search";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Agregado para centrar horizontalmente */
  flex-wrap: wrap; /* Permite que los elementos se envuelvan a una nueva línea si no caben en la misma fila */

  .search-container {
    display: flex;
    align-items: center;
    margin-right: 10px; /* Espacio entre los elementos */
  }

  .search-title {
    margin-right: 5px; /* Espacio entre el título y el campo de búsqueda */
  }

  button.filter-button {
    background: ${darkTheme.primaryColor};
    color: ${darkTheme.white};
    border: none;
    padding: 0.4rem 1rem;
    cursor: pointer;
  }
`;

const SearchContainer = () => {
  return (
    <Container>
      <div className="search-container">
        <span className="search-title">Market:</span>
        <Search />
      </div>
      <div className="search-container">
        <span className="search-title">Desde:</span>
        <Search />
      </div>
      <div className="search-container">
        <span className="search-title">Hasta:</span>
        <Search />
      </div>
      <button className="filter-button">Filtrar</button>
    </Container>
  );
};

export default SearchContainer;
