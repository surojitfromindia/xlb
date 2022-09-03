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
      message.error('Connection to server failed');
    } else {
      for (let fn of capture) {
        fn(error);
      }
    }
  }
};
export { API_PATH, axiosBaseConfig, APIWrapper };
export type { ErrorRevoker };
