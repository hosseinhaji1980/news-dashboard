import React from 'react';
import GetCategory from '../Components/Main/CategoryList';
import CreateCategory from '../Components/Main/CreateCategory';
import TreeView from '../Components/Main/TreeView';

const Categories = () => {
  return (
    <div className=' d-flex justify-content-between categories'>
      <div className="col-xl-5 create-category rounded-3">
        <TreeView/>
      </div>
      <div className="col-xl-6 category-list rounded-3">
        <GetCategory/>
      </div>
    </div>
  );
};

export default Categories;
