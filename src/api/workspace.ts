import { APIWrapper, axiosBaseConfig, ErrorRevoker } from './api';

async function getWorkSpacesService() {
  let response = await axiosBaseConfig.get('/workspace');
  if (response.data) {
    return response.data;
  }
}

const getWorkSpaces = (...caller: ErrorRevoker[]) => { 
  let fn = getWorkSpacesService()
  return APIWrapper(()=> fn, ...caller)};

export { getWorkSpaces };
