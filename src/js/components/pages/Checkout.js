import React from 'react'
import CheckoutItem from './CheckoutItem';

function Checkout({ productsData, cartItems, ...props }) {

  // Total cost of all products combined
  let total = cartItems.reduce((sum, i) => (sum += i.count * i.price), 0);

  // Go back to last page
  const goBack = () => {
    props.history.push("/products");
  }

  return (
    <div id="checkout">
      <div className='container'>
        <h2>Checkout</h2>
        <button className='goback-btn' onClick={goBack}>
          <i className='fas fa-chevron-left'></i>Go Back
        </button>

        <div className='cart-items'>
          {
            cartItems.map((item, index) => {
              return (
                <CheckoutItem
                  key={index}
                  data={item}
                  index={index}
                />
              );
            })
          }
        </div>

        <div className="checkout">
          <form>
            <h3>Payment Details</h3>

            <div className="input">
              <label htmlFor="cardholder">Cardholder name</label>
              <input type="text" name="cardholder" id="cardholder" placeholder="Cardholder name" />
              <i className="fas fa-user-tie"></i>
            </div>

            <div className="input">
              <label htmlFor="cardnumber">Card number</label>
              <input type="text" name="cardnumber" id="cardnumber" placeholder="Card number" />
              <i className="far fa-credit-card"></i>
            </div>

            <div className="card-details">
              <div className="input">
                <div className="month">
                  <label htmlFor="expire">Expiry month</label>
                  <input type="text" name="expire" id="expire" placeholder="MM" />
                  <i className="far fa-calendar-alt"></i>
                </div>
              </div>

              <div className="input">
                <div className="year">
                  <label htmlFor="year">Expiry Year</label>
                  <input type="text" name="year" id="year" placeholder="YY" />
                </div>
                <i className="far fa-calendar-alt"></i>
              </div>

              <div className="input">
                <div className="cvc">
                  <label htmlFor="cvc">CVC</label>
                  <input type="text" name="cvc" id="cvc" placeholder="CVC" />
                </div>
                <i className="fas fa-lock"></i>
              </div>
            </div>

            <div className="input">
              <label htmlFor="mail">Email</label>
              <input type="text" name="mail" id="mail" placeholder="Email" />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="input">
              <label htmlFor="street">Street</label>
              <input type="text" name="street" id="street" placeholder="Street" />
              <i className="far fa-address-card"></i>
            </div>

            <div className="input">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" placeholder="City" />
              <i className="far fa-address-card"></i>
            </div>

            <div className="input">
              <label htmlFor="state">State</label>
              <input type="text" name="state" id="state" placeholder="State" />
              <i className="far fa-address-card"></i>
            </div>

            <div className="input">
              <label htmlFor="code">Postal Code</label>
              <input type="text" name="code" id="code" placeholder="Postal Code" />
              <i className="far fa-address-card"></i>
            </div>

            <div className="confirm">Confirm order</div>

          </form>
          <div className='total'>
            <ul>
              <li>Subtotal <span>${total}</span></li>
              <li>Shipping <span>Free shipping</span></li>
              <li>Total <span>${total}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
