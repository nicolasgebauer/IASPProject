import styled, { css } from "styled-components";
import { darkTheme } from "../styles/theme";
import { useEffect } from "react";
import Link from 'next/link';


const SidebarWrapper = styled.div`
  position: fixed;
  top: 55px;
  left: 0;
  height: 100vh;
  width: 15%;
  padding-top: 1rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  background: ${darkTheme.white};
  &::-webkit-scrollbar {
    width: 0;
  }

  .icon {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    margin-top:1rem;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    font-size: 0.7rem;
    font-family: ${darkTheme.font}, sans-serif;
    color: ${darkTheme.primaryColor};
    
  }

  .icon:not(.hover-disable):hover {
    background: ${darkTheme.darkGrey};
    cursor: pointer;
  }

  .active div {
    background: ${darkTheme.white};
    cursor: pointer;
  }

  .active h1 {
    color: #fff;
  }

  .icon span {
    padding-left: 1rem;
    position: relative;
    top: 1px;
  }

  @media screen and (max-width: 1093px) {
    transform: translateX(-100%);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}
  }
`;

const SideBar = () => {
  useEffect(() => {
    // Aplicar estilos adicionales al componente al montar
    const sidebarElement = document.querySelector(".sidebar");

    if (sidebarElement) {
      sidebarElement.style.backgroundColor = "lightblue";
      
    }
  }, []);
  return (
    <SidebarWrapper>
      <Link href="/salestable" passHref>
        <div className="icon">
          <h1>Ventas</h1>
        </div>
      </Link>


      <Link href="/dashboard" passHref>
        <div className="icon">
          <h1>Tablero</h1>
        </div>
      </Link>

  
      <Link href="/products" passHref>
        <div className="icon">
          <h1>Productos</h1>
        </div>
      </Link>

    </SidebarWrapper>
  );
  
};

export default SideBar;