interface IAppState {
  user_info: IUserInfo;
  
}

interface IUserInfo {
  email?: string;
  user_name? : string,
  registration_date?: string;
}

export type { IAppState, IUserInfo };
