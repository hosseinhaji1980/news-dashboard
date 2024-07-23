import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../../Services/Categories';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const buildHierarchy = (categories) => {
  const map = {};
  const roots = [];
  
  categories.forEach(category => {
    map[category.category_id] = { ...category, children: [] };
  });
  
  categories.forEach(category => {
    if (category.parent_category_id === null) {
      roots.push(map[category.category_id]);
    } else {
      map[category.parent_category_id].children.push(map[category.category_id]);
    }
  });
  
  return roots;
};
export default function IndeterminateCheckbox() {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState({});
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const categories = await getAllCategories();
      const hierarchicalCategories = buildHierarchy(categories);
      setCategories(hierarchicalCategories);
      // تنظیم وضعیت checked بر اساس دسته‌ها
      const initialChecked = {};
      hierarchicalCategories.forEach(category => {
        initialChecked[category.category_id] = {
          checked: false,
          indeterminate: false,
          children: (category.children || []).reduce((acc, child) => {
            acc[child.category_id] = false;
            return acc;
          }, {})
        };
      });
      setChecked(initialChecked);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleParentChange = (categoryId) => (event) => {
    const newChecked = { ...checked };
    newChecked[categoryId].checked = event.target.checked;
    newChecked[categoryId].indeterminate = false;
    Object.keys(newChecked[categoryId].children).forEach(childId => {
      newChecked[categoryId].children[childId] = event.target.checked;
    });
    setChecked(newChecked);
  };

  const handleChildChange = (categoryId, childId) => (event) => {
    const newChecked = { ...checked };
    newChecked[categoryId].children[childId] = event.target.checked;

    const childrenChecked = Object.values(newChecked[categoryId].children);
    const allChecked = childrenChecked.every(val => val);
    const noneChecked = childrenChecked.every(val => !val);
    newChecked[categoryId].checked = allChecked;
    newChecked[categoryId].indeterminate = !allChecked && !noneChecked;

    setChecked(newChecked);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {categories.map(category => (
        <div key={category.category_id}>
          <FormControlLabel
            label={category.category_name}
            control={
              <Checkbox
                checked={checked[category.category_id]?.checked || false}
                indeterminate={checked[category.category_id]?.indeterminate || false}
                onChange={handleParentChange(category.category_id)}
              />
            }
          />
          <Box sx={{className:"categories", display: 'flex', flexDirection: 'column', ml: 3 }}>
            {(category.children || []).map(child => (
              <FormControlLabel
                key={child.category_id}
                label={child.category_name}
                control={
                  <Checkbox
                    checked={checked[category.category_id]?.children[child.category_id] || false}
                    onChange={handleChildChange(category.category_id, child.category_id)}
                  />
                }
              />
            ))}
          </Box>
        </div>
      ))}
    </div>
  );
}