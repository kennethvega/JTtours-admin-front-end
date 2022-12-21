import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
// pages
import Navbar from './components/Navbar';
import Product from './pages/dashboard/Product';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// redux
import { selectIsLoggedIn } from './redux/features/auth/authSlice';
import { useAppSelector } from './redux/hooks';

// axios default setting
axios.defaults.withCredentials = true;
function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <BrowserRouter>
      {!isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={!isLoggedIn ? <Login /> : <Product />} />
        <Route path="/register" element={!isLoggedIn ? <Register /> : <Product />} />
        <Route path="/product" element={isLoggedIn ? <Product /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
