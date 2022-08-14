import { APIWrapper, axiosConfig, ErrorRevoker } from './api';

async function getWorkSpacesService() {
  let response = await axiosConfig.get('/workspace');
  if (response.data) {
    return response.data;
  }
}

const getWorkSpaces = (...caller: ErrorRevoker[]) => APIWrapper(getWorkSpacesService, ...caller);

export { getWorkSpaces };
