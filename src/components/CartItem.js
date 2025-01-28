import { removeItem, increase, decrease } from "../features/cart/CartSlice";
import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5 className="item-price">${price}</h5>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem({ id }))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(increase({ id }))}
          className="amount-btn"
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => dispatch(decrease({ id }))}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
