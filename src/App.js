import React, { Component, Fragment, Suspense, lazy } from 'react';
import './scss/styles.scss';

// Data
import productsData from './data';

// Router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Nav from './js/components/Nav';
import Footer from './js/components/Footer';
import Cart from './js/components/Cart';
import StartAtTop from './js/components/StartAtTop';

// Pages
const Home = lazy(() => import('./js/components/pages/Home'));
const Products = lazy(() => import('./js/components/pages/Products'));
const SingleProduct = lazy(() => import('./js/components/pages/SingleProduct'));
const Login = lazy(() => import('./js/components/pages/Login'));

class App extends Component {
  state = {
    productsData,
    openCart: false,
    cartItems: [],
    isPopupOpen: false
  };

  // Plus counter, for the cart.
  plusCounter = index => {
    const { cartItems } = this.state;

    if (cartItems[index].count >= 1 && cartItems[index].count < 10) {
      this.setState({
        cartItems: this.state.cartItems.map((item, i) =>
          i === index ? { ...item, count: item.count + 1 } : item
        )
      });
    }
  };

  // Minus counter, for the cart.
  minusCounter = index => {
    const { cartItems } = this.state;

    if (cartItems[index].count > 1 && cartItems[index].count <= 10) {
      this.setState({
        cartItems: this.state.cartItems.map((item, i) =>
          i === index ? { ...item, count: item.count - 1 } : item
        )
      });
    }
  };

  // Opens closes cart.
  clickToOpenCart = () => {
    this.setState({ openCart: !this.state.openCart });
  };

  // Open closes Popup modal when item is added to cart
  openPopup = () => this.setState({ isPopupOpen: !this.state.isPopupOpen });

  // Add new item to cart, only if it doesn't exist in cart.
  addItemToCart = (object, select) => {
    const items = this.state.cartItems;
    let newItem = object;

    if (newItem.size.length > 0) {
      if (items.some(item => item.name === newItem.name)) {
        return null;
      } else {
        this.setState({
          cartItems: [...items, newItem]
        });
        select.style.color = "grey";
        select.style.borderColor = "rgb(169, 169, 169)";
        this.openPopup();
      }
    } else {
      select.style.color = "red";
      select.style.borderColor = "red";
    }
  };

  // Delete product from cart
  deleteItemFromCart = index => {
    let items = this.state.cartItems;

    this.setState({
      cartItems: [...items.filter((item, id) => id !== index)]
    });
  };

  render() {
    const { openCart, goToCoats, cartItems } = this.state;
    return (
      <Router>
        <div>
          <StartAtTop>
            <Nav clickToOpenCart={this.clickToOpenCart} cartItems={cartItems} />

            <Suspense fallback={<div style={{ height: '100vh' }}></div>}>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <Fragment>
                      <Home goToCoats={goToCoats} globalState={this.state} />
                    </Fragment>
                  )}
                />
                <Route exact path='/login' component={Login} />
                <Route
                  exact
                  path='/products'
                  render={props => (
                    <Fragment>
                      <Products
                        {...props}
                        globalState={this.state}
                      />
                    </Fragment>
                  )}
                />
                <Route
                  exact
                  path='/products/:product'
                  render={props => (
                    <Fragment>
                      <SingleProduct
                        {...props}
                        productsData={productsData}
                        addItemToCart={this.addItemToCart}
                        openPopup={this.openPopup}
                        isPopupOpen={this.state.isPopupOpen}
                        openCart={this.clickToOpenCart}
                      />
                    </Fragment>
                  )}
                />
              </Switch>
            </Suspense>

            <Footer />

            <Cart
              openCart={openCart}
              clickToOpenCart={this.clickToOpenCart}
              productsData={productsData}
              deleteItemFromCart={this.deleteItemFromCart}
              cartItems={cartItems}
              plus={this.plusCounter}
              minus={this.minusCounter}
            />
          </StartAtTop>
        </div>
      </Router>
    );
  }
}

export default App;
