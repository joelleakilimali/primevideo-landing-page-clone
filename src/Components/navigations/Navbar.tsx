import React from "react";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <img src="assets/logo.svg" alt="logo" />
        </div>
        <div className="nav-right">
          <div className="lang">
            <a href="/" rel="">
              EN
            </a>
          </div>
          <div className="signin">
            <a href="/" rel="">
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
