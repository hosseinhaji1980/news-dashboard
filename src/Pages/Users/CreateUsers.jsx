import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.scss';
import { createUser } from '../../Services/Users';
import Swal from 'sweetalert2';

const CreateUser = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    workplace: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'خطا در ثبت',
        text: 'رمز عبور و تکرار آن مساوی نیستند. لطفاً دوباره تلاش کنید.',
      });
      return;
    }

    try {
      const userData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        workplace: formData.workplace,
      };
      await createUser(userData);
      Swal.fire({
        icon: 'success',
        title: 'ثبت موفقیت‌آمیز',
        text: 'کاربر با موفقیت ثبت شد!',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        workplace: '',
        password: '',
        confirmPassword: '',
      });
      onUserCreated(); 
    } catch (error) {
      console.error('Error creating user:', error);
      Swal.fire({
        icon: 'error',
        title: 'خطا در ثبت',
        text: 'مشکلی در ثبت کاربر وجود دارد. لطفاً دوباره تلاش کنید.',
      });
    }
  };

  return (
    <div className="col-xl-12 text-end border rounded-1 text-light ">
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-between">
          <div className="col-xl-12 text-end mt-3">
            <div className="d-flex justify-content-around">
              <h4 className="fs-sm">نام</h4>
              <h4 className="text-start">نام خانوادگی</h4>
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
              <h4 className="fs-sm">ایمیل</h4>
              <h4 className="text-start">محل خدمت</h4>
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
                  name="workplace"
                  value={formData.workplace}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content بین mt-4">
          <div className="col-xl-12 text-end">
            <div className="d-flex justify-content-around">
              <h4 className="fs-sm">کلمه عبور</h4>
              <h4 className="text-start">تایید کلمه عبور</h4>
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
        <div className="text-center mt-3 mb-2">
          <button type="submit" className="btn btn-success">
            ذخیره
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
