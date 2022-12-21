import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Navbar from './components/Navbar';
import Product from './pages/dashboard/Product';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// redux
import { selectIsLoggedIn } from './redux/features/auth/authSlice';
import { useAppSelector } from './redux/hooks';

function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <BrowserRouter>
      {!isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Product />} />
        <Route path="/register" element={!isLoggedIn ? <Register /> : <Product />} />
        <Route path="/" element={isLoggedIn ? <Product /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
