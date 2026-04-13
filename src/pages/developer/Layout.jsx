import React from 'react'
import Header from '../../partials/Header'
import Navigation from '../../partials/Navigation'
import { navlist } from './nav-function';

const Layout = ({children, menu, submenu = ""}) => {
  return (
    <>
      <Header />
      <Navigation menu={menu} submenu={submenu}
        navigationList={navlist} />
      
      {children}
    </>
  );
}

export default Layout