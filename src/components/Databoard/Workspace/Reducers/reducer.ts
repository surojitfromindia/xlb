//a simple reducer for workspace

import { Reducer } from 'react';
import { WorkspaceData } from '../WorkspaceList';

type WorkSpaceState = {
  workSpaceList: WorkspaceData[];
};
type WorkSpaceAction = {
  type: 'reload' | 'add' | 'delete' | 'edit' | "load";
  workspace_data:  WorkspaceData[];
};
const workSpaceReducer: Reducer<WorkSpaceState, WorkSpaceAction> =(state: WorkSpaceState, action: WorkSpaceAction)=> {
  switch (action.type) {
    //after add append the items to workspace list
    case 'add': {
      return { ...state, workSpaceList: [...state.workSpaceList, ...action.workspace_data] };
    }
    case "load" :{
      return { ...state, workSpaceList: [...action.workspace_data] };
    }
    default:
      return { ...state, workSpaceList: [] };
  }
}

export { workSpaceReducer };
export type { WorkSpaceAction, WorkSpaceState };
