import React, { useState } from 'react';

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
        <div className="App">
        <h1>ورود خبر</h1>
        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-content-between">
            <label>
              موضوع خبر:
              <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
              تاریخ خبر:
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </label>
           
          </div>
          <label>
            متن خبر:
            <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
          </label>
          <label>
            چکیده:
            <textarea name="summary" value={formData.summary} onChange={handleChange}></textarea>
          </label>
          <label>
            ترجمه:
            <textarea name="translation" value={formData.translation} onChange={handleChange}></textarea>
          </label>
          <label>
            واژگان کلیدی:
            <input type="text" name="keywords" value={formData.keywords} onChange={handleChange} />
          </label>
          <label>
            انتخاب دسته بندی:
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">انتخاب کنید</option>
              <option value="سیاسی">سیاسی</option>
              <option value="اقتصادی">اقتصادی</option>
              <option value="ورزشی">ورزشی</option>
              <option value="فرهنگی">فرهنگی</option>
            </select>
          </label>
          <button type="submit">ارسال</button>
        </form>
      </div>
    );
  }
  
  export default App;