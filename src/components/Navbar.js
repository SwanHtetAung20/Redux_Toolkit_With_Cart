import { CartIcon, Testing } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <Testing />
          <CartIcon />
        </div>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
