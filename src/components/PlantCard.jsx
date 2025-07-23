import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import './PlantCard.css';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={plant.image} alt={plant.name} className="h-48 w-full object-cover" />
      <h2 className="font-bold text-lg mt-2">{plant.name}</h2>
      <p>{plant.description}</p>
      <p className="text-green-700 font-semibold">{plant.cost}</p>
      <button onClick={() => dispatch(addToCart(plant))} className="mt-2 bg-green-600 text-white px-3 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}
