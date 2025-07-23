import plantsArray from '../data/plantsData';
import PlantCard from '../components/PlantCard';
import './ProductListPage.css';

export default function ProductListPage() {
  return (
    <div className="product-listing">
      {plantsArray.map(section => (
        <div key={section.category} className="product-section">
          <h2>{section.category}</h2>
          <div className="product-grid">
            {section.plants.map(plant => (
              <PlantCard key={plant.name} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
