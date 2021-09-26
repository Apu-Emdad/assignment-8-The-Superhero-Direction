import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Agent from "../Agent/Agent";
import "./Agents.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./agent.JSON")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);

  const handleAddToCart = (agent) => {
    const newCart = [...cart, agent];
    setCart(newCart);
  };

  return (
    <div className="agent-container">
      <div>
        <div className="detail-container">
          {agents.map((agent) => (
            <Agent
              key={agent.id}
              agent={agent}
              handleAddToCart={handleAddToCart}
            ></Agent>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Agents;
