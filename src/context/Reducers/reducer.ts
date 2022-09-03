//a simple reducer for workspace

import { Reducer } from 'react';
import { IAppState, IUserInfo } from '../../interfaces/app';

type RegisterAction = {
  user_info: Partial<IUserInfo>;
  type: 'register';
};

type AppAction = RegisterAction;
const AppReducer: Reducer<IAppState, AppAction> = (state: IAppState, action: AppAction) => {
  switch (action.type) {
    //after add append the items to workspace list
    case 'register': {
      console.log("ni",action.user_info)
      localStorage.setItem('email', JSON.stringify(action.user_info));
      return { ...state, user_info: action.user_info };
    }

    default:
      return { ...state, workSpaceList: [] };
  }
};

export { AppReducer };
export type { AppAction };
