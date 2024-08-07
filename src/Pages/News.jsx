import React from 'react';
import NewsComponent from './../Components/Main/News/News'

const News = () => {
  return (
    <div>
      {/* <h2 className='text-light'>اخبار</h2> */}
      <div className="row border-1">
      <div className="col">
        <NewsComponent/>
      </div>
      </div>
    </div>
  );
};

export default News;