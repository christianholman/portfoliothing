import React from "react"
import Header from './header'

import './layout.css';

const Layout = props => (
  <div className="container mx-auto max-w-2xl px-10 sm:px-0">
      <Header/>
      {props.children}
  </div>
);

export default Layout;