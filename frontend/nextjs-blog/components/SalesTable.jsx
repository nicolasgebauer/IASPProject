import React from 'react';
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
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Client</th>
            <th>Product</th>
            <th>Integration</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí puedes mapear tus datos y crear filas de la tabla */}
          {/* Por ejemplo:
          <tr>
            <td>Cliente 1</td>
            <td>Producto 1</td>
            <td>Integración 1</td>
            <td>Fecha 1</td>
          </tr>
          */}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default SalesTable;
