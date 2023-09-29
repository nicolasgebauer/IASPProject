import styled from 'styled-components';
import Navbar from "./NavBar";
import Sidebar from './SideBar';
import Container from '../styles/Container';
import LinesChart from './LinesChart';
import ChartGrid from '../components/ChartGrid';
import Search from './Search';
import SearchContainer from '../components/SearchContainer';

export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;

  min-height: auto
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

const DashboardLayout = () => {
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  var beneficios = [1,-2,13,34,-5,6,7,8,9,10,11,12]
  var options = {};

  var data = {
    labels: meses,
    datasets: [
      {
        label: 'beneficios',
        data: beneficios,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(255,99,132)',
        pointBackgroundColor: 'rgba(255,99,132)',
      },
    ],
  };

  return (
    <StyledHome>
      <Navbar />
      <Sidebar />
      <Container>
        <h1>Dashboard</h1>
        <SearchContainer/>
        <ChartGrid data={data} options={options} />
      </Container>
    </StyledHome>
  );
};

export default DashboardLayout;
