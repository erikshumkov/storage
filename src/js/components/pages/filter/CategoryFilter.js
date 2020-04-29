import React from 'react'

function CategoryFilter({ globalState, change }) {

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
                  defaultChecked={globalState.coats}
                />
                <label
                  style={globalState.coats ? labelTrue : labelFalse}
                  htmlFor='coats'
                >
                  Coats (6)
                        </label>
                <span
                  name='coats'
                  className='checkmark'
                  style={
                    globalState.coats ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.boots}
                />
                <label
                  style={globalState.boots ? labelTrue : labelFalse}
                  htmlFor='boots'
                >
                  Boots (4)
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.boots ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.accessories}
                />
                <label
                  style={
                    globalState.accessories ? labelTrue : labelFalse
                  }
                  htmlFor='accessories'
                >
                  Accessories (8)
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.accessories
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
