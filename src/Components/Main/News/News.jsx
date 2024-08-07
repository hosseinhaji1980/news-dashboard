import React, { useState, useEffect, useRef } from 'react';
import '../../../Scss/News.scss';
import Categories from '../CategoryList';
<<<<<<< HEAD
import DatePickerFa from '../../DatePickerPersian';
import { createNews } from '../../../Services/newsService';
import Classification from '../../Classification';
=======
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // استایل Quill
>>>>>>> 2e879c6d0ef8be74aad91e960f97ff307018410b

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

  const quillRef = useRef(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    const quill = new Quill(quillRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'blockquote', 'code-block'],
          [{ 'direction': 'rtl' }],
          [{ 'align': [] }],
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'color': [] }, { 'background': [] }],
        ]
      }
    });

    const summaryQuill = new Quill(summaryRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'blockquote', 'code-block'],
          [{ 'direction': 'rtl' }],
          [{ 'align': [] }],
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'color': [] }, { 'background': [] }],
        ]
      }
    });

    quill.on('text-change', () => {
      setFormData({
        ...formData,
        content: quill.root.innerHTML
      });
    });

    summaryQuill.on('text-change', () => {
      setFormData({
        ...formData,
        summary: summaryQuill.root.innerHTML
      });
    });

  }, [formData]);

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
    <div>
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
<<<<<<< HEAD
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
=======
            <label className="label">متن خبر:</label>
            <div ref={quillRef} className="textarea"></div>
            <label className="label">چکیده:</label>
            <div ref={summaryRef} className="textarea"></div>
          </div>
          <div className="col-4">
            <label className="label">دسته بندی:</label>
            <Categories />
          </div>
        </div>
        <label className="label">ترجمه:</label>
        <textarea className="textarea" name="translation" value={formData.translation} onChange={handleChange}></textarea>
        <label className="label">دسته بندی:</label>
        <select className="select" name="category" value={formData.category} onChange={handleChange}>
          <option value="">انتخاب کنید</option>
          <option value="فارسی">فارسی</option>
          <option value="بی بی سی">بی بی سی</option>
          <option value="ایران اینترنشنال">ایران اینترنشنال</option>
          <option value="انگلیسی">انگلیسی</option>
          <option value="رویترز">رویترز</option>
        </select>
        <label className="label">واژگان کلیدی:</label>
        <input type="text" className="input" name="keywords" value={formData.keywords} onChange={handleChange} />
>>>>>>> 2e879c6d0ef8be74aad91e960f97ff307018410b
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
