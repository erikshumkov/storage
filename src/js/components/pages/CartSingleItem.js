import React, { Component } from 'react';

class CartSingleItem extends Component {
  render() {
    const { data, deleteItemFromCart, index, plus, minus } = this.props;
    return (
      <div className='cart-item'>
        <div className='img'>
          <img src={data.url} alt='jacket' />
        </div>
        <div className='item-id'>
          <h5>{data.name}</h5>
          <p className='item-brand'>{data.brand}</p>
          <p className='item-size'>Size: {data.size.toUpperCase()}</p>
          <p className='item-color'>Color: {data.color}</p>
        </div>
        <div className='number'>
          <div className='minus' onClick={() => minus(index)}>
            -
          </div>
          <div className='text'>{data.count}</div>
          <div className='plus' onClick={() => plus(index)}>
            +
          </div>
        </div>
        <div className='price-delete'>
          <div className='price'>${data.count * data.price}</div>
          <div className='delete' onClick={() => deleteItemFromCart(index)}>
            &times;
          </div>
        </div>
      </div>
    );
  }
}

export default CartSingleItem;
