import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  const { sport } = useParams<{ sport: string }>();
  const categoryTitle = sport ? sport.charAt(0).toUpperCase() + sport.slice(1) : 'Collection';

  return (
    <div className="pt-24 min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">{categoryTitle}</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-12">
          Explore the latest {sport} gear. Engineered for performance, designed for the streets.
        </p>
        
        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white dark:bg-ysh-purple rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center">
                 <span className="material-icons-outlined text-6xl text-gray-400">checkroom</span>
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all">View</button>
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{categoryTitle} Item {item}</h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">Premium Material • {sport?.toUpperCase()}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">$85.00</span>
                  <button className="text-gray-500 hover:text-primary transition-colors">
                    <span className="material-icons-outlined">favorite_border</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;