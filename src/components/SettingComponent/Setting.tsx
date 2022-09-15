import { Col, Menu } from 'antd';
import { FC, useMemo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Setting: FC = () => {
  const { pathname } = useLocation();
  const selected_location = useMemo(() => `${pathname.split('/').pop()}`, [pathname]);
  return (
    <div className='flex h-screen' >
      <Col style={{ width: '200px' }}>
        <Menu  style={{ height: '100%' }} defaultSelectedKeys={[selected_location]}>
          <Menu.Item key={'general'}>
            <Link to="/app/setting/general">General</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col className='p-5'>
        <Outlet />
      </Col>
    </div>
  );
};
export default Setting;
