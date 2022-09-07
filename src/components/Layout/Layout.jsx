import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductViewModal from "../ProductViewModal/ProductViewModal";
const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main">{children}</div>
      </div>
      <Footer></Footer>
      <ProductViewModal />
    </>
  );
};

export default Layout;
