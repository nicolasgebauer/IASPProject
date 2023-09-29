import { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../components/SideBar';
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '../components/NavBar';
import { StyledHome } from './dashboard';
import Container from '../styles/Container';
function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/general/products/')
      .then(response => {
        setProducts(response.data.products);
        console.log(response.data.Products);
        console.log(typeof response.data.products);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);

  return (

    
 
    <StyledHome>
      <GlobalStyle />
    <SideBar/>
    <Navbar />
    
    <Container>
      <h1>Productos</h1>
      <table>
        <thead>
          <tr>
            <th>Parent SKU</th>
            <th>SKU</th>
            <th>Código de Barras</th>
            <th>Nombre</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.SKU}>
              <td>{product.parentSKU}</td>
              <td>{product.SKU}</td>
              <td>{product.barCode}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
    </StyledHome>
  );
}

export default Products;
