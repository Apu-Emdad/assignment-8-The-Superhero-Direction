import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const agent of cart) {
    total = total + agent.salary;
  }

  return (
    <div>
      <h1>Add to cart</h1>
      <div className="cart">
        <h3>Total Person: {props.cart.length}</h3>
        <br />
        <div>
          {cart.map((singleAgent) => (
            <p
              style={{
                backgroundColor: "blanchedalmond",
                padding: "10px",
                margin: "10px",
                fontWeight: "bold",
                borderRadius: "40px",
              }}
            >
              {singleAgent.name}
            </p>
          ))}
        </div>
        <h2>
          Total: <span style={{ fontSize: "30px" }}>$</span> {total}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
