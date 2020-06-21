import React from 'react';
import './App.css';
import Shopitem from './components/Shopitem';
import Header from './components/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart'
import {CartProvider} from './context/Global'
function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Shopitem path="/" component={Shopitem} />
          </Switch>
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
