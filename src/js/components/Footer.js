import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className='box'>
          <h4 className='footer-heading'>Contact</h4>

          <div className='support'>
            <h6>Call Support</h6>
            <p>
              Mon - Sat 9 AM - 9 PM <br />
              Sun 10 AM - 5 PM <br />
              +46 (0) 8 555 33 999
            </p>
          </div>

          <div className='email'>
            <h6>
              <a href='mailto:storeexample999@gmail.com'>Email Us</a>
            </h6>
          </div>
        </div>

        <div className='box'>
          <h4 className='footer-heading'>Services</h4>

          <div className='services'>
            <ul>
              <li>
                <i className='far fa-check-square'></i> Free shipping
              </li>
              <li>
                <i className='far fa-check-square'></i> Free returns
              </li>
              <li>
                <i className='far fa-check-square'></i> Free 30-Day Returns
              </li>
              <li>
                <i className='far fa-check-square'></i> Reserve in store
              </li>
            </ul>
          </div>
        </div>

        <div className='box'>
          <h4 className='footer-heading'>Our Company</h4>

          <div className='services'>
            <ul>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright'>&copy; 2019 Storage All rights reserved.</div>
    </footer>
  );
};

export default Footer;
