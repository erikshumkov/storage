import React from 'react'

// testa att använda en vanlig checkbox istället för en custom

function BrandFilter({ productState, change }) {

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

  const { filippa, tiger, lacoste, lindeberg, tga, glory, lyle, oscar, peak, tretorn } = productState;
  const brand = ["filippa", "tiger", "lacoste", "lindeberg", "tga", "glory", "lyle", "oscar", "peak", "tretorn"];
  const brandVar = [filippa, tiger, lacoste, lindeberg, tga, glory, lyle, oscar, peak, tretorn];
  const brandName = ["Filippa K", "Tiger of Sweden", "J Lindeberg", "TGA", "These Glory Days", "Lacoste", "Lyle & Scott", "Oscar Jacobson", "Peak Performance", "Tretorn"];

  return (
    <div>
      <div className='filter'>
        <input type='checkbox' id='brand-options' className='toggle' />
        <label htmlFor='brand-options' className='title'>
          Brand
                  <h4>
            All brands
                    <span className='icon'>&times;</span>
          </h4>
        </label>
        <div className='content'>
          <div className='brandname'>

            {brand.map((item, index) => {
              return <div key={index} className='option'>
                <label className='option-title'>
                  <input
                    type='checkbox'
                    id={brand[index]}
                    name={brand[index]}
                    className='check-option'
                    onChange={change}
                    defaultChecked={brandVar[index]}
                  />
                  <label
                    htmlFor={brand[index]}
                    style={brandVar[index] ? labelTrue : labelFalse}
                  >
                    {brandName[index]}
                  </label>
                  <span
                    className='checkmark'
                    style={
                      brandVar[index] ? checkboxTrue : checkboxFalse
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

export default BrandFilter
