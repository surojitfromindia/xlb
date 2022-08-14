import axios from 'axios';

const API_PATH = 'http://localhost:3001';
const axiosConfig = axios.create({ baseURL: API_PATH });

type CallerFnType = () => Promise<any>;
type ErrorRevoker = (error:any)=> void
const APIWrapper = async (caller: CallerFnType, ...capture: ErrorRevoker[]) => {
  try {
   let data =  await caller();
   if(data){
       console.log("data from api call")
       return data;
   }
  } catch (error) {
    console.log('ERROR:', error);
    for (let fn of capture) {
      fn(error);
    }
  }
};
export { API_PATH, axiosConfig, APIWrapper };
export type {ErrorRevoker}
