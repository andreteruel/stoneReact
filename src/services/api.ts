import axios from 'axios';
import md5 from 'md5';
import { ApiProps, returnProps } from './types';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

export const getParams = () =>{
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + process.env.EXPO_PUBLIC_PRIVATE_KEY + process.env.EXPO_PUBLIC_PUBLIC_KEY);
    return {
        ts: timestamp,
        apikey: process.env.EXPO_PUBLIC_PUBLIC_KEY,
        hash: hash,
      }
}

export async function Get<T>({url, params} : ApiProps) {
  params = {
    ...getParams()
  }

  const response = await api.get<returnProps<T>>(url, {
    params
  });

  return response.data.data.results;
}

