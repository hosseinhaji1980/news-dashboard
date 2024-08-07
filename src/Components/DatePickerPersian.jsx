import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

// تابع برای تبدیل اعداد فارسی به انگلیسی
const convertPersianNumbersToEnglish = (text) => {
  const persianToEnglishNumbers = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
  };

  return text.split('').map(char => persianToEnglishNumbers[char] || char).join('');
};

export default function DatePickerFa({ onChange }) {
  const [value, setValue] = useState(null);

  const handleChange = (date) => {
    setValue(date);
    if (date) {
      // تبدیل تاریخ به فرمت مورد نظر و سپس تبدیل اعداد فارسی به انگلیسی
      const formattedDate = date.format('YYYY-MM-DD');
      const dateWithEnglishNumbers = convertPersianNumbersToEnglish(formattedDate);
      console.log(dateWithEnglishNumbers);
      onChange(dateWithEnglishNumbers);
    } else {
      onChange('');
    }
  };

  return (
    <div style={{ direction: 'rtl' }} className="datepicker">
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
