import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { calculateCheckout } from "../utils/discount";

function Checkout() {
  const { cart } = useContext(CartContext);

  const {
    subtotal,

    productDiscount,

    cheapestDiscount,

    cartDiscount,

    finalAmount,
  } = calculateCheckout(cart);

  return (
    <div className="container">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        <>
          <div className="summary">
            <div>Subtotal</div>

            <div>₹{subtotal}</div>
          </div>

          <div className="summary">
            <div>Product Discount</div>

            <div>− ₹{Math.round(productDiscount)}</div>
          </div>

          <div className="summary">
            <div>Cheapest Item 50% Off</div>

            <div>− ₹{Math.round(cheapestDiscount)}</div>
          </div>

          <div className="summary">
            <div>Cart Discount</div>

            <div>− ₹{Math.round(cartDiscount)}</div>
          </div>

          <hr />

          <div className="final">
            <div>Final Amount</div>

            <div>₹{Math.round(finalAmount)}</div>
          </div>

          <button className="pay">Proceed To Pay</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
