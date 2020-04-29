import React from 'react'

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
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='filippa'
                  name='filippa'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.filippa}
                />
                <label
                  htmlFor='filippa'
                  style={productState.filippa ? labelTrue : labelFalse}
                >
                  Filippa K
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.filippa ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='tiger'
                  name='tiger'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.tiger}
                />
                <label
                  style={productState.tiger ? labelTrue : labelFalse}
                  htmlFor='tiger'
                >
                  Tiger of Sweden
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.tiger ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='lindeberg'
                  name='lindeberg'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.lindeberg}
                />
                <label
                  htmlFor='lindeberg'
                  style={productState.lindeberg ? labelTrue : labelFalse}
                >
                  J Lindeberg
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.lindeberg ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='tga'
                  name='tga'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.tga}
                />
                <label
                  htmlFor='tga'
                  style={productState.tga ? labelTrue : labelFalse}
                >
                  TGA
                        </label>
                <span
                  className='checkmark'
                  style={productState.tga ? checkboxTrue : checkboxFalse}
                ></span>
              </label>
            </div>

            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='glory'
                  name='glory'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.glory}
                />
                <label
                  htmlFor='glory'
                  style={productState.glory ? labelTrue : labelFalse}
                >
                  These Glory Days
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.glory ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='lacoste'
                  name='lacoste'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.lacoste}
                />
                <label
                  htmlFor='lacoste'
                  style={productState.lacoste ? labelTrue : labelFalse}
                >
                  Lacoste
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.lacoste ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='lyle'
                  name='lyle'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.lyle}
                />
                <label
                  htmlFor='lyle'
                  style={productState.lyle ? labelTrue : labelFalse}
                >
                  Lyle & Scott
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.lyle ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='oscar'
                  name='oscar'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.oscar}
                />
                <label
                  htmlFor='oscar'
                  style={productState.oscar ? labelTrue : labelFalse}
                >
                  Oscar Jacobson
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.oscar ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='peak'
                  name='peak'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.peak}
                />
                <label
                  htmlFor='peak'
                  style={productState.peak ? labelTrue : labelFalse}
                >
                  Peak Performance
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.peak ? checkboxTrue : checkboxFalse
                  }
                ></span>
              </label>
            </div>
            <div className='option'>
              <label className='option-title'>
                <input
                  type='checkbox'
                  id='tretorn'
                  name='tretorn'
                  className='check-option'
                  onChange={change}
                  defaultChecked={productState.tretorn}
                />
                <label
                  htmlFor='tretorn'
                  style={productState.tretorn ? labelTrue : labelFalse}
                >
                  Tretorn
                        </label>
                <span
                  className='checkmark'
                  style={
                    productState.tretorn ? checkboxTrue : checkboxFalse
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

export default BrandFilter
