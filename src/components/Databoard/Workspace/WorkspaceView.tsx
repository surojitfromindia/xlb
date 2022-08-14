//details view of a workspace

import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImportFrom from '../ImportFrom';
import { WorkspaceData } from './WorkspaceList';

const WorkspaceView: FC = () => {
  let { workspaceid } = useParams();
  let [showImport, setShowImport] = useState(false);

  //api call by the id
  useEffect(() => {
    async function fetchWorkspaceInfomation() {
      let {data} = await axios.get(`http://localhost:3001/workspace/${workspaceid}`);
      if(data){
        let workspace_info = data as WorkspaceData;
        let tables_count = workspace_info.details?.tables ?? 0
        if(tables_count === 0){
          setShowImport(true)
        }
      }
    }  
    fetchWorkspaceInfomation();
  }, [workspaceid])
  
  return (
    <div>
      <div>{showImport && <ImportFrom />}</div>
    </div>
  );
};
export default WorkspaceView;
