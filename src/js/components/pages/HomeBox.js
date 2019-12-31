import React from 'react';
import { Link } from 'react-router-dom';

const HomeBox = ({ data }) => {
  if (data.section === 'first section') {
    return (
      <div className='thelook-item'>
        <Link to='/products' className='thelook-link'>
          <h3>{data.headingText}</h3>
          <div className='shop-link'>{data.linkText}</div>
        </Link>
      </div>
    );
  }
  if (data.section === 'second section') {
    return (
      <div className='thelook-item'>
        <Link to='/products' className='thelook-link'>
          <h3>{data.headingText}</h3>
          <p>{data.paragraphText}</p>
          <div className='shop-link'>{data.linkText}</div>
        </Link>
      </div>
    );
  }
};

export default HomeBox;
