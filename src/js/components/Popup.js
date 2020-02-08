import React from 'react';
import { Link } from 'react-router-dom';

const Popup = ({ openPopup, isPopupOpen, item }) => {
  // const show = {
  //   display: 'block'
  // };
  // const hide = {
  //   display: 'none'
  // };

  return (
    <div>
      <div
        className={isPopupOpen ? 'added-overlay' : ''}
        onClick={openPopup}
      ></div>
      <div
        className='added-modal'
        style={isPopupOpen ? { display: 'block' } : { display: 'none' }}
      >
        <div className='container'>
          <div className='modal-header'>
            <h4>Item successfully added to cart</h4>
            <span onClick={openPopup}>&times;</span>
          </div>
          <div className='modal-body'>
            <div className='image'>
              <div
                className='current-image'
                style={{
                  background: `url(${item.url}) center center no-repeat`,
                  backgroundSize: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              ></div>
            </div>
            <div className='content'>
              <div className='content-text'>
                <div className='title'>
                  <p>{item.brand}</p>
                </div>
                <div className='item-name'>
                  <p>{item.name}</p>
                </div>
                <div className='price'>
                  <p>${item.price}</p>
                </div>
                <div className='size'>
                  <p>Size: {item.size.toUpperCase()}</p>
                </div>
                <div className='color'>
                  <p>Color: {item.color}</p>
                </div>
              </div>
              <div className='buttons'>
                <button className='keep-shop'>
                  <Link to='/products' className='modal-link' onClick={openPopup}>
                    Keep shopping
                  </Link>
                </button>
                <button className='go-checkout'>Go to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
