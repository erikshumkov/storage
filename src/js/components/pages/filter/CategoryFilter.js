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

  const { coats, boots, accessories } = productState;
  const category = ["coats", "boots", "accessories"];
  const categoryVar = [coats, boots, accessories];
  const numbers = [6, 4, 8];

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


            {category.map((cat, index) => {
              let capitalizeTitle = `${cat.charAt(0).toUpperCase()}${cat.substring(1)}`

              return <div key={numbers[index]} className='option'>
                <label className='option-title'>
                  <input
                    type='checkbox'
                    id={category[index]}
                    className='check-option'
                    name={category[index]}
                    onChange={change}
                    defaultChecked={categoryVar[index]}
                  />
                  <label
                    style={categoryVar[index] ? labelTrue : labelFalse}
                    htmlFor={category[index]}
                  >
                    {`${capitalizeTitle} (${numbers[index]})`}
                  </label>
                  <span
                    name={category[index]}
                    className='checkmark'
                    style={
                      categoryVar[index] ? checkboxTrue : checkboxFalse
                    }
                  ></span>
                </label>
              </div>
            })}


          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
