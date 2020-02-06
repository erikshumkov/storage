import React from 'react';

const Shipping = () => {
  return (
    <section className='ship-info'>
      <div className='ship-info-flex'>
        <div className='info-item'>
          <i className='fas fa-shipping-fast'></i>
          <p>Free Shipping</p>
        </div>
        <div className='info-item'>
          <i className='far fa-calendar-alt'></i>
          <p>Free 30-Day Returns</p>
        </div>
        <div className='info-item'>
          <i className='fas fa-reply'></i>
          <p>Free Returns</p>
        </div>
        <div className='info-item'>
          <i className='fas fa-cart-plus'></i>
          <p>Reserve in store</p>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
