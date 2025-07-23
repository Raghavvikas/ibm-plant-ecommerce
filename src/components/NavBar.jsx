import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-green-700 text-white">
      <div className="font-bold text-xl">Paradise Nursery</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}