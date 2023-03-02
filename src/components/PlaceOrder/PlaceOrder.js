import React, { useContext, useEffect } from "react";
import "../../App.css";
import { CartContext } from "../../CartContext";

function PlaceOrder() {
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className="placeOrder-container">
      <h2 className="thankyou">Thank you for placing your order</h2>
      <p>
        Your order number is <strong>#2001539</strong>. We have emailed your
        order confirmation and will send you an update when your order has been
        shipped.
      </p>
      <br />
      <h2 className="dont-worry"> Continue with your shopping!</h2>
      <br />
    </div>
  );
}

export default PlaceOrder;
