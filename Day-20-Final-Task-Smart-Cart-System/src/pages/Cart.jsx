import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>No Items Added</p>
      ) : (
        cart.map((item) => (
          // ✅ Fixed: Wrapped all props in curly braces
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
}

export default Cart;