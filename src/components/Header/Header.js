import React from "react";
import search from "../../assets/search.svg";
import logo from "../../assets/logo.svg";
import shop from "../../assets/shopping_cart.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles['bottom-gradient-border']}>
        <a className="column" href="www.google.com">
          <img className={styles['logo']} src={logo} alt="logo" />
        </a>
        <nav className="column">
          <button>
            <img src={search} alt="search icon" />
          </button>
          <button>
            <img src={shop} alt="shopping icon" />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
