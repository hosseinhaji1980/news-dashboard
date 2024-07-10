import React, { useState } from 'react';

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    title: '',
    primaryCategory: '',
  });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const categoryData = {
//         title: formData.title,
//         primaryCategory: formData.primaryCategory,
//       };

      // Assuming createCategory is defined elsewhere and handles category creation
    //   await createCategory(categoryData);

      // Show success message
//       alert('ثبت موفقیت‌آمیز');

//       // Clear form fields
//       setFormData({
//         title: '',
//         primaryCategory: '',
//       });

//       // Trigger any parent component callback if needed
//       // onCategoryCreated(); // Uncomment if needed
//     } catch (error) {
//       console.error('Error creating category:', error);

//       // Show error message
//       alert('خطا در ثبت. مشکلی در ثبت دسته بندی وجود دارد.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  return (
    <div className="">
      <h2>دسته بندی</h2>
      <div className="row category-list">
        <div className="col-xl-6 category">
          {/* <form onSubmit={handleSubmit}> */}
          <form >
            <div className="row d-flex justify-content-between">
              <div className="col-xl-6">
                <label className='mt-4'> عنوان دسته بندی</label>
                <input
                  type='text'
                  value={formData.title}
                  id="title"
                  name="title"
                //   onChange={handleChange}
                  
                />
                
              </div>
              <div className="col-xl-6">
                
                <label>دسته بندی اصلی</label>
                <input
                  type='text'
                  value={formData.primaryCategory}
                  id="primaryCategory"
                  name="primaryCategory"
                //   onChange={handleChange}
                  
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
