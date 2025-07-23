import { useSelector } from 'react-redux';
import CartCard from '../../components/CartCard';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = useSelector(state => state.cart);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-green-700">Continue Shopping</Link></p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => <CartCard key={item.name} item={item} />)}
          </div>
          <div className="mt-6 flex justify-between">
            <Link to="/products" className="bg-gray-300 px-4 py-2 rounded">Continue Shopping</Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}