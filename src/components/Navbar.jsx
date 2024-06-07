import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Продукты</NavLink>
        </li>
        <li>
          <NavLink to="/basket">
            Корзина: {cartProducts.length >= 1 ? cartProducts.length : "пуста"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
