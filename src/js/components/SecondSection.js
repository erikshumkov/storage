import React from 'react';
import HomeBox from './pages/HomeBox';

const SecondSection = ({ homeData }) => {
  return (
    <section className='thelook second'>
      {homeData.map(data => {
        if (data.section === 'second section') {
          return <HomeBox key={data.id} data={data} />;
        } else {
          return null;
        }
      })}
    </section>
  );
};

export default SecondSection;
