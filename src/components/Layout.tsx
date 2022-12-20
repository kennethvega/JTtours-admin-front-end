import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Button from './utility/Button';
import Card from './utility/Card';
import Container from './utility/Container';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <div className="grid dashboard-grid gap-3 w-full">
        <Sidebar />
        <div>
          <Card>
            <div className="sticky top-0 flex justify-between bg-white p-3 border-b backdrop-blur-sm bg-opacity-80">
              <h3 className="text-2xl font-bold ">Dashboard</h3>
              <div className="max-w-[6rem]">
                <Button>Logout</Button>
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
