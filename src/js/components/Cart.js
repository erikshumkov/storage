import React from 'react';
import { Link } from 'react-router-dom';
import CartSingleItem from './pages/CartSingleItem';

const Cart = ({
  openCart,
  clickToOpenCart,
  cartItems,
  deleteItemFromCart,
  plus,
  minus
}) => {
  return (
    <div>
      <div
        className={openCart ? 'overlay-background' : ''}
        onClick={clickToOpenCart}
      ></div>
      <div className={openCart ? 'shop-overlay open' : 'shop-overlay closed'}>
        <div className='container'>
          <h2>Shopping Cart</h2>
          <div className='cart-items'>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                return (
                  <CartSingleItem
                    key={index}
                    data={item}
                    deleteItemFromCart={deleteItemFromCart}
                    index={index}
                    plus={plus}
                    minus={minus}
                  />
                );
              })
            ) : (
                <div className='cart-empty'>
                  <p>Your shopping cart is empty.</p>
                </div>
              )}
          </div>

          <div className={cartItems.length > 0 ? 'footer' : 'hidden'}>
            <div className='total'>
              <span className='sub'>Subtotal:</span>
              <span className='total-cost'>
                {' '}
                ${cartItems.reduce((sum, i) => (sum += i.count * i.price), 0)}
              </span>
            </div>
          </div>
          <div className='checkout'>
            <button className='goback-btn' onClick={clickToOpenCart}>
              <i className='fas fa-chevron-left'></i>Go Back
            </button>
            <div onClick={clickToOpenCart} className={cartItems.length > 0 ? 'checkout-btn' : 'hidden'}>
              <Link className="checkout-link" to={`/checkout`}>
                Check Out
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
