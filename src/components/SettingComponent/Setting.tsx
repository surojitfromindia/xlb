import { Col, Layout, Menu, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { FC, useMemo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Setting: FC = () => {
  const { pathname } = useLocation();
  const selected_location = useMemo(() => `${pathname.split('/').pop()}`, [pathname]);
  return (
    <Row style={{ minHeight: '100%' }}>
      <Col style={{ width: '200px' }}>
        <Menu  style={{ height: '100%' }} defaultSelectedKeys={[selected_location]}>
          <Menu.Item key={'general'}>
            <Link to="/app/setting/general">General</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};
export default Setting;
