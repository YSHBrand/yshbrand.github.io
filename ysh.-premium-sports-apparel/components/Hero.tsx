import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-20 h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTRWdrsIqYMRtMJWGslZWLOm1VssLtKHvtP27CPEUWOcNclo3As-C0CDrUyLOtB2wuBB9xJagMJogpA5DSAEK59dqrVIFIOFMR8iiQNac_JqIP1cGWU9nYW2aUEtNQ1CDs0vj28Dd_HIpB4ea-YeiofGz0pH9-IE-bQNqaYxFd5UIL6FI2M_NIzt52FjwH6oEV-aRps4mf3K5AP_6HTuH5ysT-4f-aPBmEiKdopUGgagedaYD8s_v7YPnMhK47QsEK5vZU6NCndpYY" 
          alt="Athlete in urban setting looking determined" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-[-60px]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
            Season 24 / 25
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-6">
            GAME DAY. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ysh-lavender to-ysh-blue">ELEVATED.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-light leading-relaxed">
            Blurring the lines between stadium heritage and street luxury. Experience the new standard in fan apparel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/category/new" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-ysh-black font-bold text-lg rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(253,170,241,0.3)]">
              Shop the Drop
              <span className="material-icons-outlined ml-2 text-xl">arrow_forward</span>
            </Link>
            <Link to="/edit" className="inline-flex justify-center items-center px-8 py-4 bg-ysh-purple/50 backdrop-blur-md border border-white/10 text-white font-medium text-lg rounded-full hover:bg-ysh-purple transition-all duration-300">
              View Lookbook
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling Text Strip */}
      <div className="absolute bottom-0 w-full bg-primary text-ysh-black py-2 overflow-hidden whitespace-nowrap z-20">
        <div className="inline-block animate-[slide_20s_linear_infinite]">
          <span className="mx-4 font-bold uppercase tracking-widest">Free Shipping on Orders Over $150</span> • 
          <span className="mx-4 font-bold uppercase tracking-widest">New Basketball Collection Live</span> • 
          <span className="mx-4 font-bold uppercase tracking-widest">Join the Club for Early Access</span> •
          <span className="mx-4 font-bold uppercase tracking-widest">Free Shipping on Orders Over $150</span> • 
          <span className="mx-4 font-bold uppercase tracking-widest">New Basketball Collection Live</span> • 
          <span className="mx-4 font-bold uppercase tracking-widest">Join the Club for Early Access</span> •
        </div>
      </div>
    </header>
  );
};

export default Hero;