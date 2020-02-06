import React from 'react';

const Brand = () => {
  return (
    <section className='brands'>
      <h3>Top Brands</h3>
      <div className='brand'>
        <div className='brand-img'>
          <img
            className='brand-logo lacoste'
            src='https://res.cloudinary.com/duckpx7as/image/upload/v1580933281/images/lacoste_fieims.png'
            alt='Lacoste logo'
          />
        </div>
        <div className='brand-img peak'>
          <img
            className='brand-logo'
            src='https://res.cloudinary.com/duckpx7as/image/upload/v1580933281/images/peakperformance_cdohci.png'
            alt='Peak performance logo'
          />
        </div>
        <div className='brand-img gant'>
          <img
            className='brand-logo'
            src='https://res.cloudinary.com/duckpx7as/image/upload/v1580933281/images/gant_t40igo.png'
            alt='Gant logo'
          />
        </div>
        <div className='brand-img tiger'>
          <img
            className='brand-logo'
            src='https://res.cloudinary.com/duckpx7as/image/upload/v1580933285/images/tiger_wsp3dt.png'
            alt='tiger logo'
          />
        </div>
        <div className='brand-img tiger'>
          <img
            className='brand-logo'
            src='https://res.cloudinary.com/duckpx7as/image/upload/v1580933281/images/filippak_ry7sao.png'
            alt='filippa k logo'
          />
        </div>
      </div>
    </section>
  );
};

export default Brand;
