
import styled from 'styled-components';
import { darkTheme } from '../styles/theme.jsx';


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: ceimport { Line } from 'react-chartjs-2';
  import {
      Chart as ChartJS,
      CategoryScale,
      PointElement,
      LinearScale, 
      LineElement,
      Title,
      Tooltip,
      Legend,
      Filler,
  } from 'chart.js'
  
  ChartJS.register(
      CategoryScale,
      LineElement,
      PointElement,
      LineElement,
      LinearScale, 
      Title,
      Tooltip,
      Legend,
      Filler
  );
  
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  var beneficios = [1,-2,13,34,-5,6,7,8,9,10,11,12]
  var midata = {
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
  
  var misoptions = {
      
  };
  export default function LinesChart(){
      return <Line data={midata} options={misoptions}/>
  }nter;
  width: 100%;
  background: "#202020";
  z-index: 99;
  padding: 0.7rem 1.5rem;
  background: ${darkTheme.darkGrey};

  input {
    width: 500px;
  }


  .toggle-navhandler {
    display: none;
  }

  .logo span {
    position: relative;
    top: 1px;
    color: #fff;
    font-weight: bold; /* Hacer que el texto sea negrita */
    font-size: 2em; /* Aumentar el tamaño de la fuente (ajusta el valor según tus preferencias) */
  }

  ul {
    list-style: none;
    display: flex;
    position: relative;
    top: 2px;
  }

  li svg {
    margin-right: 1.7rem;
    position: relative;
    top: 3px;
  }

  img {
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1093px) {
    .toggle-navhandler {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      width: 400px;
    }
  }

  @media screen and (max-width: 850px) {
    input {
      width: 280px;
    }
  }

  @media screen and (max-width: 500px) {
    .toggle-navhandler {
      display: none;
    }

    li svg {
      width: 30px;
      height: 30px;
      margin-right: 1.7rem;
      position: relative;
      top: 0px;
    }
  }
`;

const Navbar = () => {

  return (
    <Wrapper>
      <div className="logo flex-row">
        <span>
          HopeSolutions
        </span>
      </div>
        
      <ul>
        <li>
          <p> hola</p>
        </li>
        <li>
        <p> hola</p>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;