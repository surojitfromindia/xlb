import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';

const WelcomeView: FC = () => {
  useEffect(() => {
    console.log("gt");
      
  
  }, [])
  
  return (
    <Layout>
      <Layout>
        <Content className='p-5 h-50 h-screen' >
          <h1 className='text-3xl font-bold'>
            XLB
          </h1>
          <div className='text-lg flex flex-col'>
            <div>Welcome to xlb. A data processing app</div>
            <div>Currently this is a demo mode. we only support one document per user.</div>

          </div>
          <Link className='font-medium' to="/app">Dashboard</Link>
        </Content>
      </Layout>
    </Layout>
  );
};
export default WelcomeView;
