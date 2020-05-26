import React, { Component } from 'react';
import Popup from '../Popup';

class SingleProduct extends Component {
  state = {
    size: ''
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      productsData,
      match,
      addItemToCart,
      openPopup,
      isPopupOpen,
      openCart
    } = this.props;
    let checkRoute = productsData.filter(
      data => data.route === match.params.product
    );
    let data = productsData[checkRoute[0].id];

    let item = {
      name: data.type,
      brand: data.brand,
      color: data.color,
      url: data.url,
      price: data.price,
      size: this.state.size,
      count: 1
    };

    return (
      <div>
        <Popup isPopupOpen={isPopupOpen} openPopup={openPopup} item={item} openCart={openCart} />
        <section id='single-product'>
          <div className='grid-container'>
            <div className='product-section'>
              <div className='img-container'>
                <img src={data.url} className="img" alt="The product" />
              </div>
            </div>
            <div className='order-section'>
              <div className='order-section__container'>
                <div className='product-information'>
                  <h2>{data.brand}</h2>
                  <h1>{data.type}</h1>
                  <div className='price'>${data.price}</div>
                  <div className='color'>
                    <p>Color: {data.color}</p>
                    <div
                      className='color-square'
                      style={{
                        background: `${data.hexColor}`
                      }}
                    ></div>
                  </div>
                </div>
                <div className='add-to-cart'>
                  <select
                    name='size'
                    id='size'
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                    ref={element => this.selectRef = element}
                  >
                    <option value=''>Pick a Size</option>
                    <option value='s'>S</option>
                    <option value='m'>M</option>
                    <option value='l'>L</option>
                    <option value='xl'>XL</option>
                  </select>
                  <button onClick={() => addItemToCart(item, this.selectRef)}>
                    Add to cart
                  </button>
                </div>
                <div className='product-specification'>
                  <div className='product-info'>
                    <input
                      type='checkbox'
                      id='description'
                      className='checkbox-description'
                    />
                    <label htmlFor='description'>
                      Product Description
                      <span className='icon'>&times;</span>
                    </label>
                    <div className='content'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum temporibus nihil maxime, debitis dicta quae,
                        consequatur repellendus deleniti totam quam, animi iste
                        doloribus quod sint iure aperiam exercitationem
                        necessitatibus vel?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum temporibus nihil maxime, debitis dicta quae,
                        consequatur repellendus deleniti totam quam, animi iste
                        doloribus quod sint iure aperiam exercitationem
                        necessitatibus vel?
                      </p>
                    </div>
                  </div>
                  <div className='delivery'>
                    <input
                      type='checkbox'
                      id='return'
                      className='checkbox-return'
                    />
                    <label htmlFor='return'>
                      Delivery & Return
                      <span className='icon'>&times;</span>
                    </label>
                    <div className='content'>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Harum, accusantium est ea commodi ad, debitis
                        deleniti perspiciatis sint quasi consectetur magni
                        dolorem aliquam, ipsa aperiam eaque officia quo at
                        recusandae.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum temporibus nihil maxime, debitis dicta quae,
                        consequatur repellendus deleniti totam quam, animi iste
                        doloribus quod sint iure aperiam exercitationem
                        necessitatibus vel?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SingleProduct;
