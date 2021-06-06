
import React, { FC } from 'react';
import Router from '../../routes/Router';
import Header from './Header/Header';

const Layout:FC = () => (
  <div>
    <header>
      <Header />
    </header>
    <section>
      {/* render all pages under the same header */}
      <Router />
    </section>
  </div>
);

export default Layout;