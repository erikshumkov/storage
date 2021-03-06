import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ clickToOpenCart, cartItems }) => {
  return (
    <div className='nav'>
      <div className="wrapper">
        <h4 className='logo'>
          <Link to='/' className='logo-link'>
            Storage
        </Link>
        </h4>

        <ul className='ul-nav'>
          <li>
            <Link to='/login' className='user'>
              <i className='far fa-user'></i>
            </Link>
          </li>
          <li className='shop-btn' onClick={clickToOpenCart}>
            <i className='fas fa-shopping-cart'></i>
            <div className={cartItems.length > 0 ? 'shop-items' : 'hidden'}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
