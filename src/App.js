import { Route, Routes } from 'react-router-dom';
import Market from './pages/Market';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/shopping-cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
