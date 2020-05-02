import React from 'react'

function CheckoutItem({ data, index }) {
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

      <div className='price-delete'>
        <div className='price'>${data.count * data.price}</div>
      </div>
    </div>
  )
}

export default CheckoutItem
