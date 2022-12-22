import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarItemProps } from './sidebarType';

const SidebarItem = ({ item }: SidebarItemProps) => {
  //active menu style
  const activeLink = ({ isActive }: any) => (isActive ? ' text-white bg-[#161A21] flex items-center gap-3 p-2 rounded-lg cursor-pointer' : 'flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer');
  return (
    <NavLink to={item.path} className={activeLink}>
      {item.icon}
      {item.title}
    </NavLink>
  );
};

export default SidebarItem;
