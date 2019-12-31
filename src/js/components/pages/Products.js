import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render() {
    const { globalState, clearAllFilters, change } = this.props;

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
        <section id='shop'>
          <div className='wrapper'>
            <div className='filter-section'>
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
                      value={globalState.min}
                      onChange={change}
                    />

                    <input
                      type='text'
                      name='max'
                      id='maxPrice'
                      pattern='[0-9]*'
                      className='max-price'
                      value={globalState.max}
                      onChange={change}
                    />
                  </div>
                </div>
              </div>

              <div className='filter-button'>
                {/* <button>show products</button> */}
                {globalState.filippa ||
                globalState.tiger ||
                globalState.lacoste ||
                globalState.lindeberg ||
                globalState.tga ||
                globalState.glory ||
                globalState.lyle ||
                globalState.oscar ||
                globalState.peak ||
                globalState.tretorn ||
                globalState.coats ||
                globalState.boots ||
                globalState.accessories ? (
                  <div className='clear-filter' onClick={clearAllFilters}>
                    Clear Filters
                  </div>
                ) : null}
              </div>
            </div>

            <div className='products'>
              <div className='grid-container'>
                {this.props.filteredData !== undefined ? (
                  this.props.filteredData.map(item => {
                    return <Product key={item.id} data={item} />;
                  })
                ) : (
                  <p>You need to change the filter.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
