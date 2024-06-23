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
    <div className="user-form-container">
      <div className="form-wrapper">
        <h2 className="text-center mb-4">تعریف کاربر جدید</h2>
        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-contents-between">
            <div className="col-xl-8">

          <div className=" form-row">
            <div className="form-group col-md-3">
              <label htmlFor="firstName">نام</label>
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
            <div className="form-group col-md-3">
              <label htmlFor="lastName">نام خانوادگی</label>
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
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">شماره تلفن</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password">کلمه عبور</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="confirmPassword">تایید کلمه عبور</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              ارسال
            </button>
          </div>
        </form>
      </div>
      <div className="row d-flex justify-content-between">
  <div className="col-xl-4">
    <div className="d-flex justify-content-between">
      <h4>نام</h4>
      <h4>نام خانوادگی</h4>
    </div>
    <div className="row">

    <div className="d-flex justify-content-between">
    <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                />
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
    </div>
  );
};


export default Users;
