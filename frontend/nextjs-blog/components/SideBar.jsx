import styled, { css } from "styled-components";
import { darkTheme } from "../styles/theme";

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
  background: ${darkTheme.grey};
  &::-webkit-scrollbar {
    width: 0;
  }



  .active div {
    background: ${darkTheme.darkGrey};
    cursor: pointer;
  }

  .active h1 {
    color: #fff;
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

const Sidebar = () => {

  return (
    <SidebarWrapper>
      <div className="icon2">
        <h1>Home</h1>
      </div>

      <div className="icon3">
        <h1>Your Cases</h1>
      </div>

      <div className="icon4">
        <h1>Saved Cases</h1>
      </div>

    </SidebarWrapper>
  );
};

export default Sidebar;