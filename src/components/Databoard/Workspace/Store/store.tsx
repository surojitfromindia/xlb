import { createContext, ReactNode, FC, useReducer, Dispatch } from 'react';
import { WorkSpaceAction, workSpaceReducer } from '../Reducers/reducer';
import { WorkspaceData } from '../WorkspaceList';

const initalValue = {
  state: {
    workSpaceList: [],
  },
  dispatch: () => null,
};

type InitialStateType = {
  workSpaceList: WorkspaceData[];
};

const InitialState: InitialStateType = {
  workSpaceList: [],
};
const WorkspaceContext = createContext<{ state: InitialStateType; dispatch: Dispatch<WorkSpaceAction> }>(initalValue);

interface Props {
  children: ReactNode;
}

const WorkSpaceProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(workSpaceReducer, InitialState);
  return <WorkspaceContext.Provider value={{ state, dispatch }}>{children}</WorkspaceContext.Provider>;
};

export { WorkSpaceProvider, WorkspaceContext };
