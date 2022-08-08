import React, { FC } from 'react';
import { Layout } from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SideMenu from './SideMenu';
import { Link, Outlet } from 'react-router-dom';

const SecureView: FC = () => {
  return (
    <>
      <Layout>
        <Header className=''>
          <div className='flex h-full items-center'>
            <div className='text-2xl text-white'>REDUCE&reg;</div>
          </div>
        </Header>
        <Layout hasSider>
          <Sider className='fixed overflow-auto h-screen inset-0' theme="light">
            <SideMenu />
          </Sider>
          <Content className='h-screen relative'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default SecureView;
