import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting users:', error);
  }
};

export const createUser = async (user) => {
  try {
    console.log(user);
    const response = await axios.post(API_URL, user, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error updating user:', error);
  }
};
