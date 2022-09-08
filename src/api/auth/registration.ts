import { APIWrapper, axiosBaseConfig, ErrorRevoker } from '../api';


async function getUserExistsService(username: string) {
  let response = await axiosBaseConfig.get(`/register/validateuser?username=${username}`);
  if (response.data) {
    return response.data;
  }
}
async function postNewUserRegitserService(username: string, password: string, confirm_password: string) {
  const registration_payload = {
    user_name: username,
    password: password,
    confirm_password: confirm_password,
  };
  let response = await axiosBaseConfig.post('/register', registration_payload);
  if (response.data) {
    return response.data;
  }
}

//@path api/user/register/exists
//@desc Verify if this username already registered with this system
const getUserExistsStatus = (username: string, ...caller: ErrorRevoker[]) => {
  let fn = getUserExistsService(username);
  return APIWrapper(() => fn, ...caller);
};
//@path api/user/register
//@desc Register a new user to system and return a token if successfull
const postNewUserRegitser = (username: string, password: string, confirm_password: string, ...caller: ErrorRevoker[]) => {
  let fn = postNewUserRegitserService(username, password, confirm_password);
  return APIWrapper(() => fn, ...caller);
};

export { getUserExistsStatus, postNewUserRegitser };
