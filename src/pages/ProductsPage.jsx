import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductsPage = () => {
  const products = useSelector((state) => state.products.products);
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const cartProductIds = useMemo(
    () => cartProducts.map((product) => product.id),
    [cartProducts]
  );

  const addToBasket = (id, name, price) => {
    dispatch({ type: "ADD_PRODUCT", payload: { id, name, price } });
  };

  const isInCart = (id) => cartProductIds.includes(id);

  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price}
            <button
              onClick={() =>
                addToBasket(product._id, product.name, product.price)
              }
              disabled={isInCart(product._id)}
            >
              {isInCart(product._id) ? "В корзине" : "В корзину"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
