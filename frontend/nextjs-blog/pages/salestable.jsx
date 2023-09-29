import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const TableContainer = styled.div`
  margin-top: 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const SalesTable = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/retail/sales/')
      .then(response => {
        setSalesData(response.data.sales);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Integracion</th>
            <th>Fecha de Creacion</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map(item => (
            <tr key={item.product}>
              <td>{item.client}</td>
              <td>{item.product}</td>
              <td>{item.integration}</td>
              <td>{item.creation_date}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default SalesTable;
