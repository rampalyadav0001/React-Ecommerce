import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Cart from './features/cart/cart';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { Counter } from './features/counter/Counter';
import ProductList from './features/product-list/components/ProductList';
import ProductDetailsPage  from './pages/ProductDetailPage';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: '/cart',
    element: <CartPage></CartPage>,
  },
  {
    path: '/checkout',
    element: <Checkout></Checkout>,
  },
  {
    path: '/product-detail',
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
]);
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
