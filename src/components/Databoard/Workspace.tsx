import { Button, message } from 'antd';
import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react';
import { getWorkSpaces } from '../../api/workspace';
import CreateWorkSpaceModal from './Workspace/CreateWorkSpace';
import { WorkspaceContext, WorkSpaceProvider } from './Workspace/Store/store';
import { WorkspaceList } from './Workspace/WorkspaceList';

const WorkSpaceIndex: FC = () => {
  const { state, dispatch } = useContext(WorkspaceContext);
  let [showWorkSpaceCreationModal, setWorkSpaceCreationModal] = useState<boolean>(false);
  let [workSpaceModalActionState, setWorkSpaceModalActionState] = useState<'add' | 'edit'>('add');
  let handleWorkSpaceCreationModal = (state: boolean) => {
    setWorkSpaceCreationModal(state);
  };

  //load data from api call
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchWorkspaceInformation();
    }

    async function fetchWorkspaceInformation() {
      let data = await getWorkSpaces(onLoadError);
      if (data) {
        dispatch({ type: 'load', workspace_data: data });
      }
    }
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  const onLoadError = (error: any) => {
    message.error('Some error');
  };
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
