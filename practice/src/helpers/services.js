import axios from 'axios';
import { BASE_URL, API } from '../constants/constants';

// Get data by GET method
export const getAllStudent = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/${API}`);
    return res.data;
  } catch (error) {
    res.status, res.statusText;
  }
  console.log(res);
};
