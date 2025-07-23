import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.css';

export default function NavBar() {
    const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar">
      <div className="navbar-brand">🌿 Paradise Nursery</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart"> Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}</Link>
      </div>
    </nav>
  );
}
