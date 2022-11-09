import axios from 'axios';
import { BASE_URL, API } from '../constants/constants';

// Get data by GET method
export const getAllUserAPI = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/${API}`);
    return res.data;
  } catch (error) {
    window.alert(`An error has occurred: ${error}`);
  }
};

// Get single data by GET method
export const getUserApi = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/${API}/${id}`);
    return res.data;
  } catch (error) {
    window.alert(`An error has occurred: ${error}`);
  }
};

// Post data by POST method
export const postNewUserAPI = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/${API}`, data);
    return res.data;
  } catch (error) {
    window.alert(`An error has occurred: ${error}`);
  }
};

// Update data by PUT method
export const editUserAPI = async (data) => {
  try {
    const { id, ...newData } = data;
    const res = await axios.put(`${BASE_URL}/${API}/${id}`, newData);
    return res.data;
  } catch (error) {
    window.alert(`An error has occurred: ${error}`);
  }
};

// Delete data by DELETE method
export const deleteUserAPI = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${API}/${id}`);
    return res.data;

    console.log(res.data);
  } catch (error) {
    window.alert(`An error has occurred: ${error}`);
  }
};
