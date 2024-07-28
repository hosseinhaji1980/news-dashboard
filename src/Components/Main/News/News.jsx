import React, { useState, useEffect, useRef } from 'react';
import '../../../Scss/News.scss';
import Categories from '../CategoryList';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // استایل Quill

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
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
