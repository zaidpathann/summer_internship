import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [dark, setDark] = useState(false);

  const toggle = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <div className="logo">SmartCart</div>
      
      <div className="links">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/checkout">Checkout</Link>
        
        {/* ✅ Fixed: Wrapped the 'toggle' function reference in curly braces */}
        <button className="mode" onClick={toggle}>
          {dark ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;