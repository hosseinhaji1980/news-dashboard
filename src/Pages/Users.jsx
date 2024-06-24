import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/Users.scss'; // برای استایل‌های اضافی

const Users = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // فرم را ارسال کنید یا اقدامات لازم را انجام دهید
    console.log('Form submitted', formData);
  };

  return (
    <div className="user-form-container p-4 ">
      <div className="form-wrapper">
        <div className="row">
  <div className="col-xl-6 text-end border bg-light">
  <div className="row d-flex justify-content-between">
  <div className="col-xl-12 text-end">
        <h2 className="text-end fs-2 mb-4 text-info ">تعریف کاربر جدید</h2>
        </div>
        </div>
        <form onSubmit={handleSubmit}>

        <div className="row d-flex justify-content-between">
  <div className="col-xl-12 text-end">
    <div className="d-flex justify-content-around">
      <h4 className='fs-sm'>نام</h4>
      <h4 className='text-start'>نام خانوادگی</h4>
    </div>
    <div className="row g-6">
      <div className="col">
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  </div>
</div>
<div className="row d-flex justify-content-between mt-4">
  <div className="col-xl-12 text-end">
    <div className="d-flex justify-content-around">
      <h4 className='fs-sm'>ایمیل</h4>
      <h4 className='text-start'>محل خدمت</h4>
    </div>
    <div className="row g-6">
      <div className="col">
        <input
          type="email"
          className="form-control text-start"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col">
        <input
          type="tel"
          className="form-control text-start"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  </div>
</div>
<div className="row d-flex justify-content-between mt-4">
  <div className="col-xl-12 text-end">
    <div className="d-flex justify-content-around">
      <h4 className='fs-sm'>کلمه عبور</h4>
      <h4 className='text-start'>تایید کلمه عبور</h4>
    </div>
    <div className="row g-6">
      <div className="col">
        <input
          type="password"
          className="form-control text-start"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col">
        <input
          type="password"
          className="form-control text-start"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  </div>
</div>
        </form>
        <div className="text-center mt-3 mb-2">
            <button type="submit" className="btn btn-primary">
              ارسال
            </button>
          </div>
      </div>
      


    </div>
          
        </div>
    
    </div>
    
  );
};


export default Users;
