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

const InventoryTable = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET a la API
    axios.get('http://localhost:8000/general/inventory/')
      .then(response => {
        // Actualiza el estado con los datos de la API
        setInventoryData(response.data.inventory);
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
            <th>Producto</th>
            <th>Bodega</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map(item => (
            <tr key={item.product}>
              <td>{item.product}</td>
              <td>{item.warehouse}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default InventoryTable;
