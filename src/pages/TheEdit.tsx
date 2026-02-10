import React from 'react';

const TheEdit: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero for The Edit */}
      <div className="relative h-[400px] mb-12">
         <div className="absolute inset-0 bg-gradient-to-r from-ysh-purple to-background-dark"></div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest uppercase mb-4">Editorial</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">The Edit.</h1>
            <p className="text-xl text-gray-300 max-w-xl">Stories from the sidelines, athlete spotlights, and deep dives into design culture.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Featured Article */}
            <div className="md:col-span-2 group cursor-pointer">
               <div className="rounded-2xl overflow-hidden h-[500px] relative mb-6">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzcimjkOEMuUJoYh9jGMIAAvUD7DnwAnS58FPicscchpAICcAQqQRhwS15P7sXpMeToiHwZUoA85pW8Jw2jsLcbZG0UFPDmOBBU_oYdfOk1hcUcJtYdJQ6cORf7cIf-O0kmuWvBS4XkA1M3TgD76V4fFClCiy5tAwQTFVbY1ctVO18ATdQevCYxaYfqDkbLy8AKU7_WLPYcDp5PiUswLAKnrsYzyKQ5PikR8ZLADv3ArEugMZ4NBNyV77mzOXS8UYiHXg2nmeguRYX" alt="Featured article" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                     <span className="bg-primary text-ysh-black px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Featured</span>
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Origins of the Court</h2>
                     <p className="text-gray-200">Tracing the history of street basketball fashion in NYC.</p>
                  </div>
               </div>
            </div>

            {/* Sub Articles */}
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="flex flex-col gap-4 group cursor-pointer">
                  <div className="rounded-xl overflow-hidden h-64 relative bg-ysh-purple">
                     <span className="material-icons-outlined text-6xl text-white/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">article</span>
                  </div>
                  <div>
                     <span className="text-primary text-sm font-semibold uppercase">Design</span>
                     <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mt-1">Material Innovation Vol. {i}</h3>
                     <p className="text-gray-400 text-sm mt-2">A look behind the scenes at our R&D process for the new season.</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default TheEdit;