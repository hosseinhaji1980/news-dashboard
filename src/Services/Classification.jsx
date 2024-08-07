import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const getClassifications = async () => {
  try {
    const response = await axios.get(`${API_URL}/news/classification`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting users:', error);
  }
};