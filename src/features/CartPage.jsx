import { useSelector } from 'react-redux';
import CartCard from '../components/CartCard';
import { Link } from 'react-router-dom';
import './CartPage.css';

export default function CartPage() {
  const cartItems = useSelector(state => state.cart);

  const totalAmount = cartItems.reduce((total, item) => {
    const unitCost = parseFloat(item.cost.replace('$', ''));
    return total + unitCost * item.quantity;
  }, 0);

  return (
    <div className="cart-page-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">
          Your cart is empty. <Link to="/products" className="continue-link">Continue Shopping</Link>
        </p>
      ) : (
        <>
          <div className="cart-item-list">
            {cartItems.map(item => <CartCard key={item.name} item={item} />)}
          </div>

          <div className="cart-summary">
            <p className="cart-total">Total Amount: <strong>${totalAmount.toFixed(2)}</strong></p>
          </div>

          <div className="cart-footer">
            <Link to="/products" className="continue-btn">Continue Shopping</Link>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
