import React from 'react'

function CategoryFilter({ productState, change }) {

  const checkboxTrue = {
    backgroundColor: '#000',
    borderColor: '#000'
  };
  const checkboxFalse = {
    backgroundColor: '#fff',
    borderColor: '#ccc'
  };

  const labelTrue = {
    fontWeight: '900'
  };

  const labelFalse = {
    fontWeight: 'normal'
  };

  return (
    <div>
      <div className='filter'>
        <input
          type='checkbox'
          id='category-options'
          className='toggle'
        />
        <label htmlFor='category-options' className='title'>
          Category
                  <h4>
            All categories
                    <span className='icon'>&times;</span>
          </h4>
        </label>
        <div className='content'>
          <div className='category'>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='coats'
                  className='check-option'
                  name='coats'
                  onChange={change}
                  defaultChecked={productState.coats}
                />
                <label
                  style={productState.coats ? labelTrue : labelFalse}
                  htmlFor='coats'
                >
                  Coats (6)
                        </label>
                <span
                  name='coats'
                  className='checkmark'
                  style={
                    productState.coats ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='boots'
                  name='boots'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.boots}
                />
                <label
                  style={productState.boots ? labelTrue : labelFalse}
                  htmlFor='boots'
                >
                  Boots (4)
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.boots ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='accessories'
                  className='check-option'
                  name='accessories'
                  onChange={change}
                  defaultChecked={productState.accessories}
                />
                <label
                  style={
                    productState.accessories ? labelTrue : labelFalse
                  }
                  htmlFor='accessories'
                >
                  Accessories (8)
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.accessories
                      ? checkboxTrue
                      : checkboxFalse
                  }
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
