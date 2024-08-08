import React, { useState } from 'react';
import './../../../Scss/News.scss';
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
      console.log('News created successfully:', response);
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
      <div className="row">
    <div className="col col-6">
        <label className="label">موضوع خبر:
        </label>
            <input type="text" name="title" className="input" value={formData.title} onChange={handleChange} />
    </div>
    <div className="col col-3">
        <label className="label">تاریخ خبر:
        </label>
            <DatePickerFa onChange={handleDateChange} />
    </div>
    <div className="col col-3">
        <label className="label">طبقه بندی خبر:
        </label>
            <Classification onChange={handleClassificationChange} />
    </div>
</div>
<div className="row">
    <div className="col col-12">
        <label className="label">متن خبر:
        </label>
            <textarea className="textarea" name="content" value={formData.content} onChange={handleChange}></textarea>
    </div>
</div>

        <div className="row">
          <div className="col col-8">
            <label className="label mt-4">چکیده:
            </label>
              <textarea className="textarea" name="summary" value={formData.summary} onChange={handleChange}></textarea>
          </div>
          <div className="col col-4">
            <label className="label mt-4">دسته بندی:
              <Categories onChange={handleCategoryChange} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            <label className="label mt-5">ترجمه:
            </label>
              <textarea className="textarea mb-2" name="translation" value={formData.translation} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-12 mt-4">
            <label className="label mt-5">واژگان کلیدی:

            </label>
              <input type="text" className="input" name="keywords" value={formData.keywords} onChange={handleChange} />
          </div>
        </div>
        
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
