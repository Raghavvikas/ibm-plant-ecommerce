import { plantsArray } from '../data/plants';
import PlantCard from '../components/PlantCard';

export default function ProductListingPage() {
  return (
    <div className="p-6">
      {plantsArray.map(section => (
        <div key={section.category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {section.plants.map(plant => <PlantCard key={plant.name} plant={plant} />)}
          </div>
        </div>
      ))}
    </div>
  );
}