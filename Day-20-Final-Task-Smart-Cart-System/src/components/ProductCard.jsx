import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      {/* ✅ Fixed: Added curly braces for dynamic attributes */}
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {product.stock === 0 ? (
        <>
          <p className="out">Out of Stock</p>
          <button disabled>Unavailable</button>
        </>
      ) : (
        /* ✅ Fixed: Wrapped the arrow function in curly braces */
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      )}
    </div>
  );
}

export default ProductCard;