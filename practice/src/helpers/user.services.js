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

// Post data by POST method
export const postNewUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/${API}`, data);
    return res.data;
  } catch (error) {
    res.status, res.statusText;
  }
};

// Update data by PUT method
export const editUser = async (data) => {
  try {
    const { id, ...newData } = data;
    const res = await axios.put(`${BASE_URL}/${API}/${id}`, newData);
    return res.data;
  } catch (error) {
    window.alert(`An error has occurred: ${error}`);
  }
};

// Delete data by DELETE method
export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${API}/${id}`);
    return res.data;
  } catch (error) {
    res.status, res.statusText;
  }
};
