import React, { useState } from 'react';
import './News.scss';
import Categories from '../CategoryList';
import DatePickerFa from '../../DatePickerPersian';
import { createNews } from '../../../Services/newsService';
import Classification from '../../Classification';

function App() {
  const [formData, setFormData] = useState({
    title: '',
    publish_date: '',
    content: '',
    summary: '',
    translation: '',
    keywords: '',
    categoryId: '',
    classificationId: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCategoryChange = (categoryId) => {
    setFormData({
      ...formData,
      categoryId
    });
  };

  const handleClassificationChange = (classificationId) => {
    setFormData({
      ...formData,
      classificationId
    });
  };

  const handleDateChange = (publish_date) => {
    setFormData({
      ...formData,
      publish_date
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createNews(formData);
      setFormData({
        title: '',
        publish_date: '',
        content: '',
        summary: '',
        translation: '',
        keywords: '',
        categoryId: '',
        classificationId: ''
      });
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">ورود خبر</h1>
        <div className="row">
          <div className="col-xl-8">
            <label className="label">موضوع خبر:
              <input type="text" name="title" className="input" value={formData.title} onChange={handleChange} />
            </label>
          </div>
          <div className="col-xl-2">
            <label className="label">طبقه بندی خبر:
              <Classification onChange={handleClassificationChange} />
            </label>
          </div>
          <div className="col-xl-2">
            <label className="label">تاریخ خبر:
              <DatePickerFa onChange={handleDateChange} />
            </label>
          </div>
        </div>
        <div className="row">
          <label className="label">متن خبر:
            <textarea className="textarea" name="content" value={formData.content} onChange={handleChange}></textarea>
          </label>
          <div className="col-8">
            <label className="label">چکیده:
              <textarea className="textarea" name="summary" value={formData.summary} onChange={handleChange}></textarea>
            </label>
          </div>
          <div className="col-4">
            <label className="label">دسته بندی:
              <Categories onChange={handleCategoryChange} />
            </label>
          </div>
        </div>
        <label className="label">ترجمه:
          <textarea className="textarea" name="translation" value={formData.translation} onChange={handleChange}></textarea>
        </label>
        <label className="label">واژگان کلیدی:
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
