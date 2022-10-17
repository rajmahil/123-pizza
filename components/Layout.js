import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MenuSidebar from "./MenuSidebar";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Navbar toggle={menuToggle} />
      <MenuSidebar toggle={menuToggle} isMenuOpen={isMenuOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
