import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/features/auth/authService';
import { SET_LOGIN } from '../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Sidebar from './sidebar/Sidebar';
import Button from './utility/Button';
import Card from './utility/Card';
import Container from './utility/Container';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate('/login');
    toast.success('Successfully logged out');
  };
  return (
    <Container>
      <div className="grid dashboard-grid gap-3 w-full">
        <Sidebar />
        <div>
          <Card>
            <div className="sticky top-0 flex justify-between bg-white p-3  backdrop-blur-sm bg-opacity-80">
              <h3 className="text-2xl font-bold ">Admin Dashboard</h3>
              <div className="max-w-[6rem]">
                <Button onClick={logout}>Logout</Button>
              </div>
            </div>
            <main className="p-3">{children}</main>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Layout;
