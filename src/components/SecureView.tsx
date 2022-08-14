import React, { FC } from 'react';
import { Layout } from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom';

const SecureView: FC = () => {
  return (
    <>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: '64px',
            bottom: 0,
          }}
          theme="light"
        >
          <SideMenu />
        </Sider>

        <Layout>
          <Header
            style={{
              overflow: 'auto',
              width: '100vw',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              zIndex: 2,
            }}
          >
            <div className="flex h-full items-center">
              <div className="text-2xl text-white">REDUCE&reg;</div>
            </div>
          </Header>
          <Content style={{ marginLeft: '200px', marginTop : "64px" }} className="h-screen  overflow-scroll">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default SecureView;
