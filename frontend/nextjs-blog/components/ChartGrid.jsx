import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { darkTheme } from '../styles/theme';
const GridContainer = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  min-width: 200px; /* Establece un ancho mínimo para evitar que sea demasiado estrecho */
  max-width: 100%;
  margin: 0 auto;
  justify-content: center;
  background: ${darkTheme.white};
  height: auto; /* Ajusta la altura según tus necesidades */
`;

const ChartGridItem = styled.div`

  width: auto;
  max-width: auto;
  height: 100%; /* Ajusta la altura del elemento al 100% del contenedor */
  padding-bottom: 2rem;
`;

const ChartGrid = ({ data, options }) => {
  return (
    <GridContainer>
      <ChartGridItem>
        <Line data={data} options={options} />
      </ChartGridItem>
      <ChartGridItem>
        <Line data={data} options={options} />
      </ChartGridItem>
      <ChartGridItem>
        <Line data={data} options={options} />
      </ChartGridItem>
      <ChartGridItem>
        <Line data={data} options={options} />
      </ChartGridItem>
      {/* Agrega más elementos ChartGridItem según sea necesario */}
    </GridContainer>
  );
};

export default ChartGrid;
