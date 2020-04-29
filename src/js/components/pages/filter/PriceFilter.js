import React from 'react'

function PriceFilter({ productState, change }) {
  return (
    <div>
      <div className='filter'>
        <input type='checkbox' id='price-options' className='toggle' />
        <label htmlFor='price-options' className='title'>
          Price
                  <h4>
            All Prices
                    <span className='icon'>&times;</span>
          </h4>
        </label>
        <div className='content'>
          <div className='price'>
            <label htmlFor='minPrice' className='price-label'>
              Price ( min - max )
                    </label>
            <input
              type='text'
              id='minPrice'
              pattern='[0-9]*'
              className='min-price'
              name='min'
              value={productState.min}
              onChange={change}
            />

            <input
              type='text'
              name='max'
              id='maxPrice'
              pattern='[0-9]*'
              className='max-price'
              value={productState.max}
              onChange={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceFilter
