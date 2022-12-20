import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Layout from './components/Layout';
// redux
import { selectIsLoggedIn } from './redux/features/auth/authSlice';
import { useAppSelector } from './redux/hooks';

function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <BrowserRouter>
      {!isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Dashboard />} />
        <Route path="/register" element={!isLoggedIn ? <Register /> : <Dashboard />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Layout>
                <Dashboard />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
