import { Link } from 'react-router-dom';
import './HomePage.css';
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Paradise Nursery</h1>
      <Link to="/products" className="bg-green-700 text-white px-5 py-2 rounded">Explore Plants</Link>
    </div>
  );
}