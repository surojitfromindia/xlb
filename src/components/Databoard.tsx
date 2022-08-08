import { Button, Card } from 'antd';
import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Databoard: FC = () => {
  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
};
export default Databoard;
