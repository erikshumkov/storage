import React, { Component } from 'react';
import Product from './Product';
import CategoryFilter from './filter/CategoryFilter';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';

class Products extends Component {
  state = {
    filter: false
  };

  toggle = () => {
    this.setState({
      filter: !this.state.filter
    });
  };

  render() {
    const { globalState, clearAllFilters, change } = this.props;

    return (
      <div>
        <section id='shop'>

          <div className='wrapper'>
            <div className='filter-section'>
              <CategoryFilter globalState={globalState} clearAllFilters={clearAllFilters} change={change} />

              <BrandFilter globalState={globalState} clearAllFilters={clearAllFilters} change={change} />

              <PriceFilter globalState={globalState} change={change} />

              <div className='filter-button'>
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