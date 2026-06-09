import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="logo">SmartCart</div>

      <div className="links">
        <Link to="/">Products</Link>

        <Link to="/cart">Cart ({cart.length})</Link>

        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
