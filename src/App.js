import {BrowserRouter ,Route, Routes} from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      color:"white"
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
  <BrowserRouter>

<div>
  <Header/>
  <Routes>
  <Route path="/" Component={Homepage} exact/>
  <Route path="/coins/:id" Component={CoinPage}/>
  </Routes>
  
</div>
</BrowserRouter>
    </ThemeProvider>
  
  );
}

export default App;
