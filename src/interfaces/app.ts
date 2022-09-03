interface IAppState {
    user_info : IUserInfo
}


interface IUserInfo {
    email ?: string,
        registration_date ?: string,
}

export type {IAppState, IUserInfo}