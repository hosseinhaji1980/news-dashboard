import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { getAllCategories } from '../../Services/Categories';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicRichTreeView() {
  const [treeData, setTreeData] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      const formattedData = formatDataToTree(data);
      setTreeData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatDataToTree = (data) => {
    const categories = data.reduce((acc, category) => {
      const itemId = category.category_id.toString();
      acc[itemId] = { ...category, id: itemId, label: category.category_name, children: [] };
      return acc;
    }, {});

    const root = [];
    data.forEach((category) => {
      const itemId = category.category_id.toString();
      const parentId = category.parent_category_id ? category.parent_category_id.toString() : null;

      if (parentId === null) {
        root.push(categories[itemId]);
      } else {
        if (!categories[parentId].children) {
          categories[parentId].children = [];
        }
        categories[parentId].children.push(categories[itemId]);
      }
    });

    return root;
  };

  const handleContextMenu = (event, category) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
    setSelectedCategory(category);
    console.log(category); // برای بررسی کنسول
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleAddChild = () => {
    if (!selectedCategory) return; // بررسی برای اطمینان از وجود مقدار selectedCategory
  
    console.log('Add child to', selectedCategory.id); // چاپ شناسه دسته‌بندی
    handleClose();
  };

  const handleDeleteCategory = () => {
    if (!selectedCategory) return; // بررسی برای اطمینان از وجود مقدار selectedCategory
    console.log('Delete category', selectedCategory);
    handleClose();
  };

  const handleEditCategory = () => {
    if (!selectedCategory) return; // بررسی برای اطمینان از وجود مقدار selectedCategory
    console.log('Edit category', selectedCategory);
    handleClose();
  };

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <RichTreeView 
        items={treeData}
        getItemId={(item) => item.id}
        onContextMenu={(event, item) => handleContextMenu(event, item)}
      />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        
        <MenuItem onClick={handleAddChild}>اضافه کردن فرزند</MenuItem>
        <MenuItem onClick={handleDeleteCategory}>حذف دسته بندی</MenuItem>
        <MenuItem onClick={handleEditCategory}>ویرایش</MenuItem>
      </Menu>
    </Box>
  );
}
