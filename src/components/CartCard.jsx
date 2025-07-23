import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../features/CartSlice';
import './CartCard.css'

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const unitCost = parseFloat(item.cost.replace('$', ''));
  return (
    <div className="border p-4 rounded-lg flex justify-between items-center">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{item.name}</h2>
        <p>Unit: {item.cost} | Total: ${unitCost * item.quantity}</p>
        <div className="flex space-x-2 mt-2">
          <button onClick={() => dispatch(decreaseQty(item.name))} className="px-2 bg-yellow-500 rounded">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.name))} className="px-2 bg-yellow-500 rounded">+</button>
          <button onClick={() => dispatch(removeItem(item.name))} className="px-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>
    </div>
  );
}
