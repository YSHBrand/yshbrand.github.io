import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Abstract Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ysh-purple/10 rounded-l-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-primary/5 rounded-r-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ysh-purple rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Inner Image Gradient Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4uUQvEJkxBA3Xg-5qd4qo8fV6F_jaNl_gUgmadtNmGvJYF8thEiUAsA59P-HhNo9Z79PwLpl2Q4AxOdeBqnYMlilrQReHQlHO2tSobyZb7Z3rY5oK8QM5inbHGUqdpPBSYWubLt738p-k0pdWfHx5nEZfoDd9TkPIg9xXBr6jZDG3mCtTeHTNykj0ypTzVfKqMaojEa7CcE-E8qgsbc7aAu1c9qAoHZOWgarODM1IGrHxFPuQlcWp9w38I-Mo3Q48J5h9h0AQEPaX" 
              alt="Abstract texture of jersey fabric" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary text-ysh-black text-xs font-bold rounded mb-4">THE EDIT</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Inner Circle.</h2>
              <p className="text-gray-300 text-lg mb-8 font-light">
                Unlock early access to drops, exclusive athlete interviews, and members-only colorways. No spam, just pure sport.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-4 rounded-lg bg-ysh-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <button 
                  type="button"
                  className="px-8 py-4 bg-primary text-ysh-black font-bold rounded-lg hover:bg-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            <div className="hidden md:block relative">
              {/* Decorative Image Stack */}
              <div className="relative w-full aspect-[4/3]">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-ysh-lavender rounded-xl transform rotate-3"></div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClhx6Idgd4uWk9goaCKfy-zeAYjXb63g2FRtKbIUWRIM88KkwZJw0WRFCCYS7-IqKP0n40zjjfinO0sfO7NcnVeeBvizSfVUzQY6IQBKN6LLmSAnHq1rMHV_vtszpjF4Tgm8Mhu9ten1n-Oy5FXUa2oF1IRZDyGu-DMSkHOkaKwAasdZWJ0wePjieyNSHbSHdxrphCCE2rsFc3_n7G1LHtE17FgCITrnE7HwjNfT6JXtrB59AY0Hr2qrEzR1A9BaGhpg0Wr75R50rm" 
                  alt="Fit male model in streetwear" 
                  className="absolute top-4 right-4 w-3/4 h-3/4 object-cover rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;