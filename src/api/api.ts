import { message } from 'antd';
import axios, { AxiosError } from 'axios';

const API_PATH = 'http://localhost:5000';
const axiosBaseConfig = axios.create({ baseURL: API_PATH });

type CallerFnType = () => Promise<any>;
type ErrorRevoker = (error: any) => void;
const APIWrapper = async (caller: CallerFnType, ...capture: ErrorRevoker[]) => {
  try {
    let data = await caller();
    if (data) {
      return data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code === 'ERR_BAD_REQUEST') {
        let error_body = error.response?.data;
        for (let fn of capture) {
          fn(error_body);
        }
      }
    } else {
      message.error('Connection to server failed' + error);
    }
  }
};
export { API_PATH, axiosBaseConfig, APIWrapper };
export type { ErrorRevoker };
