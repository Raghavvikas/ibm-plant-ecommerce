import './PlantCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';

export default function PlantCard({ plant }) {

    const dispatch = useDispatch()
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      {plant.onSale && <span className="sale-badge">SALE</span>}
      <div className="plant-name">{plant.name}</div>
      <div className="plant-description">{plant.description}</div>
      <div className="price">${plant.cost}</div>
      <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
    </div>
  );
}
