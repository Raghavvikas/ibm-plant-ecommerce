import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../features/CartSlice';
import './CartCard.css'

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const unitCost = parseFloat(item.cost.replace('$', ''));
  return (
    <div className="cart-card">
  <img src={item.image} alt={item.name} />
  <div className="cart-card-details">
    <h2>{item.name}</h2>
    <p>Unit: {item.cost} | Total: ${unitCost * item.quantity}</p>
    <div className="cart-card-controls">
      <button onClick={() => dispatch(decreaseQty(item.name))} className="qty-btn">-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQty(item.name))} className="qty-btn">+</button>
      <button onClick={() => dispatch(removeItem(item.name))} className="delete-btn">Delete</button>
    </div>
  </div>
</div>
  );
}
