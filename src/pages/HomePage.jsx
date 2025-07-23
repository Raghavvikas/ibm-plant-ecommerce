import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-hero">
      <div className="home-overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Discover, nurture, and grow your love for plants.</p>
        <Link to="/products" className="explore-btn">🌿 Explore Plants</Link>
      </div>
    </div>
  );
}
