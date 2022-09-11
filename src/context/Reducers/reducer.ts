//a simple reducer for workspace

import { Reducer } from 'react';
import { IAppState, IUserInfo } from '../../interfaces/app';

type RegisterAction = {
  user_info: Partial<IUserInfo>;
  access_token : string;
  type: 'register';
};

type AppAction = RegisterAction;
const AppReducer: Reducer<IAppState, AppAction> = (state: IAppState, action: AppAction) => {
  switch (action.type) {
    //after add append the items to workspace list
    case 'register': {
      //store access_token in localStorage for now //TODO: store it in http only cookie
      localStorage.setItem("access_token", action.access_token);
      return { ...state, user_info: action.user_info,  };
    }

    default:
      return { ...state, workSpaceList: [] };
  }
};

export { AppReducer };
export type { AppAction };
