import GlobalStyle from "../styles/GlobalStyle";        
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme";
import Dashboard from './dashboard'
import { ToastContainer } from "react-toastify";


function index() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Dashboard/>     
    </ThemeProvider>

  );
}

export default index