import styled from 'styled-components';
import Navbar from "./NavBar";
import Sidebar from './SideBar';
import Container from '../styles/Container';
import LinesChart from './LinesChart';
import ChartGrid from '../components/ChartGrid';
import Search from './Search';
import SearchContainer from '../components/SearchContainer';
import SalesTable from './SalesTable';

export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;

  min-height: 100vh;
  h2 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1093px) {
    width: 95%;
  }

  @media screen and (max-width: 1090px) {
    width: 99%;
  }

  @media screen and (max-width: 870px) {
    width: 90%;
  }

  @media screen and (max-width: 670px) {
    width: 99%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
  }

  /* Agrega un margen inferior para separar del siguiente elemento */
  padding-bottom: 2rem;
`;

const SalesLayout = () => {


  return (
    <StyledHome>
      <Navbar />
      <Sidebar />
      <Container>
        <h1>
            Sales
        </h1>
        <p>Client</p><Search/>
        <SalesTable/>
      </Container>
    </StyledHome>
  );
};

export default SalesLayout;
