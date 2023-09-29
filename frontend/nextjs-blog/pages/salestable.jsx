import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from "../components/NavBar";
import Container from '../styles/Container';
import Search from '../components/Search';

import { StyledHome } from '../components/SalesLayout';
export default function Home() {
  const [inventoryData, setInventoryData] = useState([]);
  
  useEffect(() => {
    // Realiza la solicitud GET a la API
    axios.get('http://localhost:8000/general/inventory/')
      .then(response => {
        // Actualiza el estado con los datos de la API
        setInventoryData(response.data.inventory);
        console.log(response.data.inventory);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);

  return (
    <StyledHome>
    <Navbar />
    <Container>
        <h1>
            Tabla de Ventas
        </h1>
        <p>Client</p><Search/>
    <div>
      <h1>Ventas</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Almacén</th>
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
      </table>
    </div>
    </Container>
    </StyledHome>
  );
}