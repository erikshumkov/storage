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
    cartItems: [],
    filteredData: productsData,
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

  // Opens closes cart.
  clickToOpenCart = () => {
    this.setState({ openCart: !this.state.openCart });
  };

  // Open closes Popup modal when item is added to cart
  openPopup = () => this.setState({ isPopupOpen: !this.state.isPopupOpen });

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
    const { openCart, goToCoats, filteredData, cartItems } = this.state;
    const { clearAllFilters, change } = this;
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
                        filteredData={filteredData}
                        globalState={this.state}
                        productsData={productsData}
                        clearAllFilters={clearAllFilters}
                        change={change}
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
