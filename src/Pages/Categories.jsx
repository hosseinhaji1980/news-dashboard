import React, { useState } from 'react';
import { createCategory } from './../Services/Categories';

const CreateCategory = ({ onCategoryCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    primaryCategory: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const categoryData = {
        title: formData.title,
        primaryCategory: formData.primaryCategory,
      };

      await createCategory(categoryData);

      // Show success message
      alert('ثبت موفقیت‌آمیز');

      // Clear form fields
      setFormData({
        title: '',
        primaryCategory: '',
      });

      // Trigger parent component callback
      onCategoryCreated(); // Corrected function name
    } catch (error) {
      console.error('Error creating category:', error);

      // Show error message
      alert('خطا در ثبت. مشکلی در ثبت دسته بندی وجود دارد.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='categories'>
      <h2>دسته بندی</h2>
      <div className="row">
        <div className="col-xl-6 category">
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-between">
              <div className="col">
                <label className='mt-4'> عنوان دسته بندی</label>
                <input
                  type='text'
                  value={formData.title}
                  id="title"
                  name="title"
                  onChange={handleChange}
                />
                <label>دسته بندی اصلی</label>
                <input
                  type='text'
                  value={formData.primaryCategory}
                  id="primaryCategory"
                  name="primaryCategory"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className='btn btn-primary mt-3'> ذخیره</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
