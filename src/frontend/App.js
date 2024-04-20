import Layout from './components/Layout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TokenOperations from './features/TokenOperations';
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from './components/Wallet';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LiquidityRouter from './features/Liquidity/LiquidityRouter';

function App() {
  return <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<TokenOperations />} />
            <Route path='/liquidity/*' element={<LiquidityRouter />} />
          </Routes>
        </Layout>
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>;
  </Web3ReactProvider>
}

export default App;
