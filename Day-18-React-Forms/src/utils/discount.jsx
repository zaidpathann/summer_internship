export function calculateCheckout(cart) {
  let subtotal = 0;

  let productDiscount = 0;

  let cheapestDiscount = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  cart.forEach((item) => {
    if (item.quantity >= 3) {
      productDiscount += item.price * item.quantity * 0.1;
    }
  });

  if (cart.length > 0) {
    const cheapest = [...cart].sort((a, b) => a.price - b.price)[0];

    cheapestDiscount = cheapest.price * 0.5;
  }

  let afterProduct = subtotal - productDiscount - cheapestDiscount;

  let cartDiscount = 0;

  if (afterProduct > 5000) {
    cartDiscount = afterProduct * 0.05;
  }

  const finalAmount = afterProduct - cartDiscount;

  return {
    subtotal,

    productDiscount,

    cheapestDiscount,

    cartDiscount,

    finalAmount,
  };
}
