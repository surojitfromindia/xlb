import { Button } from 'antd';
import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateWorkSpaceModal from './Workspace/CreateWorkSpace';
import { WorkspaceContext, WorkSpaceProvider } from './Workspace/Store/store';
import { WorkspaceList, WorkspaceData } from './Workspace/WorkspaceList';

const WorkSpaceIndex: FC = () => {
  const { state, dispatch } = useContext(WorkspaceContext);
  let [hasData, setHasData] = useState(true);
  let [showWorkSpaceCreationModal, setWorkSpaceCreationModal] = useState<boolean>(false);
  let [workSpaceModalActionState, setWorkSpaceModalActionState] = useState<'add' | 'edit'>('add');
  let handleWorkSpaceCreationModal = (state: boolean) => {
    setWorkSpaceCreationModal(state);
  };

  let navigator = useNavigate();
  useEffect(() => {
    if (hasData === false) {
      navigator('/app/databoard/import/all');
    }
  }, [hasData]);

  const fakeDataList: [WorkspaceData] = useMemo(
    () => [
      {
        id: '1',
        title: 'People of eoon',
        description: 'A population analysis on people of eoon',
        is_shared: false,
        details: {
          tables: 1,
        },
      },
    ],
    []
  );


  useEffect(() => {
    dispatch({ type: 'load', workspace_data: fakeDataList });
  }, [dispatch, fakeDataList]);
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl">Workspace</h1>
          <Button
            type="primary"
            onClick={() => {
              handleWorkSpaceCreationModal(true);
            }}
          >
            + New workspace
          </Button>
        </div>
        <div className="mt-5">
          <WorkspaceList workspacesList={state.workSpaceList} />
        </div>
      </div>
      <CreateWorkSpaceModal
        action_mode={workSpaceModalActionState}
        visiable={showWorkSpaceCreationModal}
        onHide={() => {
          handleWorkSpaceCreationModal(false);
        }}
      />
    </>
  );
};


const WorkSpace: FC = () => {
  return (
    <WorkSpaceProvider>
      <WorkSpaceIndex />
    </WorkSpaceProvider>
  );
};

export default WorkSpace;