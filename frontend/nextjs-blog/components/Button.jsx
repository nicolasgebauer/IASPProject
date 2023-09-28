import styled, { css } from "styled-components";
import { darkTheme } from "./theme";
const Button = styled.button`
  padding: 0.4rem 1rem;
  background: ${darkTheme.red};
  color: ${darkTheme.white};
  border: 1px solid ${darkTheme.red}
  border-radius: 3px;
  letter-spacing: 1.1px;

  ${(props) =>
    props.grey &&
    css`
      background: ${darkTheme.darkGrey};
      border: 1px solid ${darkTheme.darkGrey};
      color: ${darkTheme.secondaryColor};
    `}
`;

export default Button;
