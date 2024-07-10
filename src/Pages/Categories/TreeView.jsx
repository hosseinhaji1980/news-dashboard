import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { getAllCategories } from './../../Services/Categories';

const TreeView = () => {
  const [categories, setCategories] = useState([]);
  const [expandedNodes, setExpandedNodes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getAllCategories();
        const { structuredCategories, parentIds } = buildCategoryTree(categories);
        setCategories(structuredCategories);
        setExpandedNodes(parentIds); // Set initial expanded nodes to all parent IDs
      } catch (error) {
        console.error("There was an error fetching the categories!", error);
      }
    };

    fetchCategories();
  }, []);

  const buildCategoryTree = (categories) => {
    const categoryMap = {};
    const rootCategories = [];
    const parentIds = new Set();

    categories.forEach(category => {
      categoryMap[category.category_id] = {
        ...category,
        children: []
      };
    });

    categories.forEach(category => {
      if (category.parent_category_id !== null) {
        categoryMap[category.parent_category_id].children.push(categoryMap[category.category_id]);
        parentIds.add(category.parent_category_id); // Add parent ID to set
      } else {
        rootCategories.push(categoryMap[category.category_id]);
      }
    });

    return { structuredCategories: rootCategories, parentIds: Array.from(parentIds) };
  };

  const handleClick = (nodeId) => {
    const isNodeExpanded = expandedNodes.includes(nodeId);
    if (isNodeExpanded) {
      setExpandedNodes(expandedNodes.filter(id => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const renderTree = (nodes) => (
    nodes.map((node) => (
      <React.Fragment key={node.category_id}>
        <ListItem button onClick={() => handleClick(node.category_id)}>
          <ListItemText primary={node.category_name} />
          {node.children.length > 0 ? (expandedNodes.includes(node.category_id) ? <ExpandLess /> : <ExpandMore />) : null}
        </ListItem>
        {node.children.length > 0 && (
          <Collapse in={expandedNodes.includes(node.category_id)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderTree(node.children)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ))
  );

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
    >
      {renderTree(categories)}
    </List>
  );
};

export default TreeView;
