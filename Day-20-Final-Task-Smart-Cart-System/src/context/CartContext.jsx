import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  useEffect(() => {
    localStorage.setItem(
      "cart",

      JSON.stringify(cart),
    );
  }, [cart]);

  const addToCart = (product) => {
    if (product.stock === 0) {
      alert("Out Of Stock");

      return;
    }

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      updateQuantity(
        product.id,

        1,
      );

      return;
    }

    setCart([
      ...cart,

      {
        ...product,

        quantity: 1,
      },
    ]);
  };

  const updateQuantity = (
    id,

    change,
  ) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const qty = item.quantity + change;

          if (qty < 1) return item;

          if (qty > 10) return item;

          return {
            ...item,

            quantity: qty,
          };
        }

        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,

        updateQuantity,

        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
