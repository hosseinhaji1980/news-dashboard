import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const createNews = async (newsData) => {
  try {
    // اگر تاریخ خالی است، مقدار پیش‌فرض تنظیم می‌شود

    const processedData = {
      ...newsData,
      publish_date: newsData.publish_date || null, // استفاده از مقدار پیش‌فرض
    };

    console.log("Processed Data:", processedData); // بررسی داده‌های پردازش شده

    const response = await axios.post(`${API_URL}/news`, processedData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};
