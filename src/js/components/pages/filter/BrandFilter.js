import React from 'react'

function BrandFilter({ globalState, change }) {

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
                  defaultChecked={globalState.filippa}
                />
                <label
                  htmlFor='filippa'
                  style={globalState.filippa ? labelTrue : labelFalse}
                >
                  Filippa K
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.filippa ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.tiger}
                />
                <label
                  style={globalState.tiger ? labelTrue : labelFalse}
                  htmlFor='tiger'
                >
                  Tiger of Sweden
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.tiger ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.lindeberg}
                />
                <label
                  htmlFor='lindeberg'
                  style={globalState.lindeberg ? labelTrue : labelFalse}
                >
                  J Lindeberg
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.lindeberg ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.tga}
                />
                <label
                  htmlFor='tga'
                  style={globalState.tga ? labelTrue : labelFalse}
                >
                  TGA
                        </label>
                <span
                  className='checkmark'
                  style={globalState.tga ? checkboxTrue : checkboxFalse}
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
                  defaultChecked={globalState.glory}
                />
                <label
                  htmlFor='glory'
                  style={globalState.glory ? labelTrue : labelFalse}
                >
                  These Glory Days
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.glory ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.lacoste}
                />
                <label
                  htmlFor='lacoste'
                  style={globalState.lacoste ? labelTrue : labelFalse}
                >
                  Lacoste
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.lacoste ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.lyle}
                />
                <label
                  htmlFor='lyle'
                  style={globalState.lyle ? labelTrue : labelFalse}
                >
                  Lyle & Scott
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.lyle ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.oscar}
                />
                <label
                  htmlFor='oscar'
                  style={globalState.oscar ? labelTrue : labelFalse}
                >
                  Oscar Jacobson
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.oscar ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.peak}
                />
                <label
                  htmlFor='peak'
                  style={globalState.peak ? labelTrue : labelFalse}
                >
                  Peak Performance
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.peak ? checkboxTrue : checkboxFalse
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
                  defaultChecked={globalState.tretorn}
                />
                <label
                  htmlFor='tretorn'
                  style={globalState.tretorn ? labelTrue : labelFalse}
                >
                  Tretorn
                        </label>
                <span
                  className='checkmark'
                  style={
                    globalState.tretorn ? checkboxTrue : checkboxFalse
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
