import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Databoard: FC = () => {
  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
};
export default Databoard;
