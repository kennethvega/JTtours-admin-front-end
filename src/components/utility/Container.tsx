import React from 'react';
type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[80rem] mx-auto">{children}</div>;
};

export default Container;
