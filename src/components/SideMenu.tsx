import React, { FC, useMemo } from 'react';
import {  Menu } from 'antd';
import { Link, useLocation, } from 'react-router-dom';

const SideMenu: FC = () => {
  const { pathname } = useLocation();
  const selected_location = useMemo(() => `/${pathname.split('/').pop()}`, [pathname]);

  return (
    <div>
      <Menu theme='light' defaultSelectedKeys={[selected_location]}>
        <Menu.Item key="/dashboard">
          <Link to="/app">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/databoard">
          <Link to="/app/databoard/workspace">Databoard</Link>
        </Menu.Item>
        <Menu.Item key="/setting">
          <Link to="/app/setting/general">Setting</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default SideMenu;
