import { createContext, ReactNode, FC, useReducer, Dispatch } from 'react';
import { IAppState } from '../../interfaces/app';
import { AppAction, AppReducer } from '../Reducers/reducer';

const initalValue = {
  state: {
    user_info: {},
  },
  dispatch: () => null,
};
const InitialState: IAppState = {
  user_info: {},
};

const AppContext = createContext<{ state: IAppState; dispatch: Dispatch<AppAction> }>(initalValue);

interface Props {
  children: ReactNode;
}

const AppProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
