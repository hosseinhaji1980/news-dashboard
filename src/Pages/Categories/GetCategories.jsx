import React, { useState, useEffect } from 'react';
import { getAllCategories } from './../../Services/Categories';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const categories = await getAllCategories();
      setCategories(categories);
      console.log(`Category list is ${JSON.stringify(categories)}`);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>دسته بندی</h2>
      <table className='users-table mb-6'  style={{ overflowX: 'auto', maxHeight: '1000px' } }>
        <thead >
          <tr className='text-center'>
            <th>عنوان</th>
            <th>توضیحات</th>
          </tr>
        </thead>
        <tbody>
        {categories.map((category, index) => (
            <tr key={category.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className='px-2'>{category.name}</td>
              <td className='px-2'>{category.description}</td>
            </tr>
          ))}
        </tbody>
      </table>




    </div>
  );
};

export default Categories;
