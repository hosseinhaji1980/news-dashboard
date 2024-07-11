import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting users:', error);
  }
};

export const createCategory = async (category) => {
  try {
    console.log(category);
    const response = await axios.post(API_URL, category, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
  }
};

export const addCategory = async (newCategory) => {
  const response = await axios.post(`${API_URL}/categories`, newCategory);
  return response.data;
};

export const editCategory = async (categoryId, updatedCategory) => {
  const response = await axios.put(`${API_URL}/categories/${categoryId}`, updatedCategory);
  return response.data;
};

export const deleteCategory = async (categoryId) => {
  const response = await axios.delete(`${API_URL}/categories/${categoryId}`);
  return response.data;
};