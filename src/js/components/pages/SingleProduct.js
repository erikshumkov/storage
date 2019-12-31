import React, { Component } from 'react';

class SingleProduct extends Component {
  render() {
    const { productsData, match, addItemToCart } = this.props;

    let item = {
      name: productsData[match.params.product].type,
      brand: productsData[match.params.product].brand,
      url: productsData[match.params.product].url,
      price: productsData[match.params.product].price,
      count: 1
    };

    return (
      <div>
        <section id='single-product'>
          <div className='grid-container'>
            <div className='product-section'>
              <div className='img-container'>
                <div
                  className='img'
                  style={{
                    backgroundImage: `url(${
                      productsData[match.params.product].url
                    })`
                  }}
                ></div>
              </div>
            </div>
            <div className='order-section'>
              <div className='order-section__container'>
                <div className='product-information'>
                  <h2>{productsData[match.params.product].brand}</h2>
                  <h1>{productsData[match.params.product].type}</h1>
                  <div className='price'>
                    ${productsData[match.params.product].price}
                  </div>
                  <div className='color'>
                    <p>Color: {productsData[match.params.product].color}</p>
                    <div
                      className='color-square'
                      style={{
                        background: `${
                          productsData[match.params.product].hexColor
                        }`
                      }}
                    ></div>
                  </div>
                </div>
                <div className='add-to-cart'>
                  <select name='size' id='size'>
                    <option value=''>Pick a Size</option>
                    <option value='s'>S</option>
                    <option value='m'>M</option>
                    <option value='l'>L</option>
                    <option value='xl'>XL</option>
                  </select>
                  <button onClick={() => addItemToCart(item)}>
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
                    <label htmlFor='return'>
                      Delivery & Return
                      <span className='icon'>&times;</span>
                    </label>
                    <input
                      type='checkbox'
                      id='return'
                      className='checkbox-return'
                    />
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
