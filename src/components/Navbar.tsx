import React from 'react';
import logo from '../assets/JT-tours&travels.jpg';
import { Link } from 'react-router-dom';
import Button from './utility/Button';
import { useAppSelector } from '../redux/hooks';
import { selectIsLoggedIn } from '../redux/features/auth/authSlice';
const Navbar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className="w-full shadow bg-white">
      <div className="mx-auto max-w-[80rem] h-16 flex justify-between items-center ">
        <img src={logo} alt="Logo" className="w-16" />
        {isLoggedIn ? (
          <div className="max-w-[6rem]">
            <Button>Logout</Button>
          </div>
        ) : (
          <div className="flex gap-10 items-center">
            <Link to="/login">Login</Link>
            <Link to="/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
