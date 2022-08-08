import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WorkSpace: FC = () => {
  let [hasData, setHasData] = useState(false);

  let navigator = useNavigate();
  useEffect(() => {
    if (hasData === false) {
      navigator('/app/databoard/import/all');
    }
  }, [hasData]);
  return (
    <div>
      <Link to="/app/databoard/import/all">New</Link>
      This is WorkSpace
    </div>
  );
};
export default WorkSpace;
