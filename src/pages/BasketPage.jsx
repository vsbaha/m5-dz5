import React from "react";
import { useSelector } from "react-redux";

const BasketPage = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  return (
    <div>
      <h2>Корзина</h2>
      {cartProducts.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className="products">
          {cartProducts.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasketPage;
