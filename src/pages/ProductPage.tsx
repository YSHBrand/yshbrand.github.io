import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="pt-24 pb-12 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
          <span className="material-icons-outlined mr-2">arrow_back</span> Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Placeholder */}
          <div className="aspect-square bg-ysh-purple rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <span className="material-icons-outlined text-9xl text-gray-600">image</span>
             <div className="absolute bottom-4 right-4">
                 <span className="bg-white/10 backdrop-blur text-xs px-2 py-1 rounded text-white">Product ID: {id}</span>
             </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-primary font-bold tracking-wider uppercase mb-2">New Arrival</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Premium Item Name</h1>
            <p className="text-2xl text-white font-light mb-8">$120.00</p>
            
            <div className="mb-8">
              <p className="text-gray-400 leading-relaxed mb-6">
                Constructed from our proprietary technical mesh, this piece ensures breathability without sacrificing structure. 
                Designed for the athlete who demands style both on and off the court. Features reinforced stitching and 
                moisture-wicking technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">Material</span>
                  <span className="text-white font-medium">85% Polyester, 15% Spandex</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">Fit</span>
                  <span className="text-white font-medium">Athletic / Tapered</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">Care</span>
                  <span className="text-white font-medium">Machine Wash Cold</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-ysh-black font-bold py-4 rounded-lg hover:bg-white transition-colors">
                Add to Cart
              </button>
              <button className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white">
                <span className="material-icons-outlined">favorite_border</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;