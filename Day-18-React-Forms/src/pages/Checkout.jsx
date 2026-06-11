import { useContext, useState } from "react";

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

  const [form, setForm] = useState({
    name: "",

    email: "",

    mobile: "",

    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.mobile || !form.address) {
      alert("Please fill all fields");

      return;
    }
    console.log("Order Details:", form)

    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        <>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />

            <button>Place Order</button>
          </form>

          {submitted && (
            <div className="success">Order Submitted Successfully</div>
          )}

          <div className="summary">
            <span>Subtotal</span>

            <span>₹{subtotal}</span>
          </div>

          <div className="summary">
            <span>Product Discount</span>

            <span>− ₹{Math.round(productDiscount)}</span>
          </div>

          <div className="summary">
            <span>Cheapest Discount</span>

            <span>− ₹{Math.round(cheapestDiscount)}</span>
          </div>

          <div className="summary">
            <span>Cart Discount</span>

            <span>− ₹{Math.round(cartDiscount)}</span>
          </div>

          <div className="final">Final Amount ₹{Math.round(finalAmount)}</div>
        </>
      )}
    </div>
  );
}

export default Checkout;
