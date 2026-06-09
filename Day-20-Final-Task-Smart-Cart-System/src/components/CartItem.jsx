import Badge from "./Badge";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>

      <div>
        {item.quantity >= 5 && <Badge />}
      </div>

      <div>
        {/* ✅ Fixed: Added proper curly braces around the arrow function */}
        <button onClick={() => updateQuantity(item.id, -1)}> - </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}> + </button>
      </div>

      <h4>₹{item.price * item.quantity}</h4>
      
      <button onClick={() => removeItem(item.id)}> Remove </button>
    </div>
  );
}

export default CartItem;