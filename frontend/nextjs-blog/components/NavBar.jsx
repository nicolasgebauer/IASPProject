
import styled from 'styled-components';
import Search from './Search';
import { darkTheme } from '../styles/theme';


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: "#202020";
  z-index: 99;
  padding: 0.7rem 1.5rem;
  background: ${darkTheme.grey};

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
          CaseVault
        </span>
      </div>
        
      <Search />
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