import React from 'react';

// Components
import HomeBox from './HomeBox';

// Images
import lacoste from '../../../img/lacoste.png';
import peak from '../../../img/peakperformance.png';
import gant from '../../../img/gant.png';
import tiger from '../../../img/tiger.png';
import filippak from '../../../img/filippak.png';

const Home = ({ globalState }) => {
  return (
    <div>
      <section className='thelook'>
        {homeData.map(data => {
          if (data.section === 'first section') {
            return (
              <HomeBox globalState={globalState} key={data.id} data={data} />
            );
          } else {
            return null;
          }
        })}
      </section>

      <section className='brands'>
        <h3>Top Brands</h3>
        <div className='brand'>
          <div className='brand-img'>
            <img
              className='brand-logo lacoste'
              src={lacoste}
              alt='Lacoste logo'
            />
          </div>
          <div className='brand-img peak'>
            <img
              className='brand-logo'
              src={peak}
              alt='Peak performance logo'
            />
          </div>
          <div className='brand-img gant'>
            <img className='brand-logo' src={gant} alt='Gant logo' />
          </div>
          <div className='brand-img tiger'>
            <img className='brand-logo' src={tiger} alt='tiger logo' />
          </div>
          <div className='brand-img tiger'>
            <img className='brand-logo' src={filippak} alt='filippa k logo' />
          </div>
        </div>
      </section>

      <section className='thelook second'>
        {homeData.map(data => {
          if (data.section === 'second section') {
            return <HomeBox key={data.id} data={data} />;
          } else {
            return null;
          }
        })}
      </section>

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

      <section className='newsletter'>
        <p className='newsletter-p'>
          Sign up for our newsletter and get 10% discount on your first order!
        </p>
        <form>
          <div className='flexbox'>
            <div className='newsletter-flex'>
              <div className='newsletter-firstname'>
                <label htmlFor='firstname'>Firstname:</label>
                <input type='text' name='firstname' id='firstname' />
              </div>

              <div className='newsletter-lastname'>
                <label htmlFor='lastname'>Lastname:</label>
                <input type='text' name='lastname' id='lastname' />
              </div>
            </div>

            <div className='newsletter-flex2'>
              <div className='newsletter-email'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' />
              </div>

              <button type='submit' className='submitBtn'>
                Register
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

const homeData = [
  {
    id: 1,
    section: 'first section',
    headingText: 'outerwear',
    paragraphText: '',
    linkText: 'shop now'
  },
  {
    id: 2,
    section: 'first section',
    headingText: 'accessories',
    paragraphText: '',
    linkText: 'shop now'
  },
  {
    id: 3,
    section: 'second section',
    headingText: 'For your feet',
    paragraphText: `Boots from J.Lindeberg, Filippa K, Tiger of Sweden, Tretorn &
    Lacoste.`,
    linkText: 'shop now'
  },
  {
    id: 4,
    section: 'second section',
    headingText: 'Premium Coats',
    paragraphText: `GANT, PeakPerformance, J.Lindeberg, Oscar Jacobson, Tiger of
    Sweden, & Filippa K.`,
    linkText: 'shop now'
  }
];

export default Home;
