import React, { Suspense, lazy } from 'react';

// Components
import HomeBox from './HomeBox';
const Brand = lazy(() => import('../Brand'));
const Shipping = lazy(() => import('../Shipping'));
const SecondSection = lazy(() => import('../SecondSection'));

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

      <Suspense fallback={<div></div>}>
        <Brand />

        <SecondSection homeData={homeData} />

        <Shipping />
      </Suspense>

      <section className='newsletter'>
        <p className='newsletter-p'>
          Sign up for our newsletter and get 10% discount on your first order!
        </p>
        <form>
          <div className='gridbox'>
            <div className='newsletter-firstname'>
              <label htmlFor='firstname'>Firstname:</label>
              <input type='text' name='firstname' id='firstname' />
            </div>

            <div className='newsletter-lastname'>
              <label htmlFor='lastname'>Lastname:</label>
              <input type='text' name='lastname' id='lastname' />
            </div>

            <div className='newsletter-email'>
              <label htmlFor='email'>Email:</label>
              <input type='email' name='email' id='email' />
            </div>

            <button type='submit' className='submitBtn'>
              Register
            </button>
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
