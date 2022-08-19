import React from 'react';
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Layout = ({children, ...props}) => {
  return (
    <section {...props}>
    <Nav />
    { children }
    <Footer/>
    </section>
  )
}

export default Layout