import { APIWrapper, axiosBaseConfig, ErrorRevoker } from '../api';

async function getUserExistsService(username: string) {
  let response = await axiosBaseConfig.get('/register/validateuser');
  if (response.data) {
    return response.data;
  }
}

const getUserExistsStatus = (username: string, ...caller: ErrorRevoker[]) => {
  let fn = getUserExistsService(username);
  return APIWrapper(() => fn, ...caller);
};

export { getUserExistsStatus };
