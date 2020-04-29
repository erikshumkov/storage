import React, { Component } from 'react';
import Product from './Product';
import CategoryFilter from './filter/CategoryFilter';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';

// Data
import productsData from '../../../data';

class Products extends Component {
  state = {
    productsData,
    filter: false,
    min: 0,
    max: 10000,
    coats: false,
    boots: false,
    accessories: false,
    filippa: false,
    tiger: false,
    lacoste: false,
    lindeberg: false,
    tga: false,
    glory: false,
    lyle: false,
    oscar: false,
    peak: false,
    tretorn: false,
    filteredData: productsData
  };

  // Get's all data then filters the data then puts that new data in state and shows the products that went through the filter.
  filteredData = () => {
    const {
      filippa,
      tiger,
      lacoste,
      lindeberg,
      tga,
      glory,
      lyle,
      oscar,
      peak,
      tretorn,
      productsData,
      boots,
      accessories,
      coats,
      min,
      max
    } = this.state;
    let newData;
    newData = productsData.filter(item => {
      return item.price >= min && item.price <= max;
    });

    if (coats || boots || accessories) {
      newData = newData.filter(item => {
        if (item.category === 'coats' && coats) {
          return item;
        }
        if (item.category === 'boots' && boots) {
          return item;
        }
        if (item.category === 'accessories' && accessories) {
          return item;
        } else return null;
      });
    }

    if (
      filippa ||
      tiger ||
      lacoste ||
      lindeberg ||
      tga ||
      glory ||
      lyle ||
      oscar ||
      peak ||
      tretorn
    ) {
      newData = newData.filter(item => {
        if (
          (item.brandCheck === 'filippa' && filippa) ||
          (item.brandCheck === 'tiger' && tiger) ||
          (item.brandCheck === 'lacoste' && lacoste) ||
          (item.brandCheck === 'lindeberg' && lindeberg) ||
          (item.brandCheck === 'tga' && tga) ||
          (item.brandCheck === 'glory' && glory) ||
          (item.brandCheck === 'lyle' && lyle) ||
          (item.brandCheck === 'oscar' && oscar) ||
          (item.brandCheck === 'peak' && peak) ||
          (item.brandCheck === 'tretorn' && tretorn)
        ) {
          return item;
        } else return null;
      });
    }

    this.setState({
      filteredData: newData
    });
  };

  // Clear all the filters!
  clearAllFilters = () => {
    this.setState(
      {
        coats: false,
        boots: false,
        accessories: false,
        filippa: false,
        tiger: false,
        lacoste: false,
        lindeberg: false,
        tga: false,
        glory: false,
        lyle: false,
        oscar: false,
        peak: false,
        tretorn: false,
        min: 0,
        max: 10000
      },
      () => {
        this.filteredData();
      }
    );
  };

  // Listens for changes in checkboxes and the price in the filter section.
  change = event => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.filteredData();
      }
    );
  };

  toggle = () => {
    this.setState({
      filter: !this.state.filter
    });
  };

  render() {
    const { filteredData } = this.state;
    const { clearAllFilters, change } = this;

    return (
      <div>
        <section id='shop'>

          <div className='wrapper'>
            <div className='filter-section'>
              <CategoryFilter productState={this.state} clearAllFilters={clearAllFilters} change={change} />

              <BrandFilter productState={this.state} clearAllFilters={clearAllFilters} change={change} />

              <PriceFilter productState={this.state} change={change} />

              <div className='filter-button'>
                {this.state.filippa ||
                  this.state.tiger ||
                  this.state.lacoste ||
                  this.state.lindeberg ||
                  this.state.tga ||
                  this.state.glory ||
                  this.state.lyle ||
                  this.state.oscar ||
                  this.state.peak ||
                  this.state.tretorn ||
                  this.state.coats ||
                  this.state.boots ||
                  this.state.accessories ? (
                    <div className='clear-filter' onClick={clearAllFilters}>
                      Clear Filters
                    </div>
                  ) : null}
              </div>
            </div>

            <div className='products'>
              <div className='grid-container'>
                {filteredData !== undefined ? (
                  filteredData.map(item => {
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