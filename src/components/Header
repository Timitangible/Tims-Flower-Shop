import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Kirby Plant Shop</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
