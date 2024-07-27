import React, { useState } from 'react';
import './News.scss';
import Categories from '../CategoryList';
function App() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: '',
    summary: '',
    translation: '',
    keywords: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">ورود خبر</h1>
        <div className="row">
          <div className="col">
            <label className="label">موضوع خبر:
              <input type="text" name="title" className="input" value={formData.title} onChange={handleChange} />
            </label>
          </div>
          <div className="col-xl-3">
            <label className="label">تاریخ خبر:
              <input type="date" name="date" className="input" value={formData.date} onChange={handleChange} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <label className="label">
              متن خبر:
            </label>
              <textarea className="textarea" name="content" value={formData.content} onChange={handleChange}></textarea>
          </div>
          <div className="col-4">
            <label className="label">
              متن خبر:
            </label>
            <Categories/>
          </div>
        </div>
        <label className="label">
          چکیده:
          <textarea className="textarea" name="summary" value={formData.summary} onChange={handleChange}></textarea>
        </label>
        <label className="label">
          ترجمه:
          <textarea className="textarea" name="translation" value={formData.translation} onChange={handleChange}></textarea>
        </label>
        <label className="label">
          دسته بندی:
          <select className="select" name="category" value={formData.category} onChange={handleChange}>
            <option value="">انتخاب کنید</option>
            <option value="فارسی">فارسی</option>
            <option value="بی بی سی">بی بی سی</option>
            <option value="ایران اینترنشنال">ایران اینترنشنال</option>
            <option value="انگلیسی">انگلیسی</option>
            <option value="رویترز">رویترز</option>
          </select>
        </label>
        <label className="label">
          واژگان کلیدی:
          <input type="text" className="input" name="keywords" value={formData.keywords} onChange={handleChange} />
        </label>
        <div className="button-group">
          <button type="button" className="button cancel">لغو</button>
          <button type="submit" className="button submit">تایید</button>
          <button type="button" className="button upload">بارگذاری عکس</button>
        </div>
      </form>
    </div>
  );
}

export default App;
