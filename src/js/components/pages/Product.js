import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ data }) => {
  return (
    <div className='img-container'>
      <div className={`img`} style={{ backgroundImage: `url(${data.url})` }}>
        <Link to={`/products/${data.route}`} className='thelook-link'></Link>
      </div>
      <h6>
        {data.brand} / {data.type}
      </h6>
      <span>${data.price}</span>
    </div>
  );
};

export default Product;
