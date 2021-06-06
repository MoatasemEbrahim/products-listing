
import React from 'react';

const Home = React.lazy(() => import('../pages/Products'));
const Product = React.lazy(() => import('../pages/Product'));

// every object will be a route and there are no nested objects, just nested paths
const Routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: Home,
  },
  {
    path: '/products/:id',
    key: 'PRODUCT',
    exact: true,
    component: Product,
  },
];

export default Routes;