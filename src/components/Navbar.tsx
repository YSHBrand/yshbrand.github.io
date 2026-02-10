import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary' : 'text-gray-500 dark:text-gray-300 hover:text-primary';
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-ysh-purple transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              <span className="material-icons-outlined text-3xl">menu</span>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-ysh-lavender">
              YSH.
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`transition-colors font-medium ${location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-primary'}`}>Home</Link>
            <Link to="/category/basketball" className={`transition-colors font-medium ${isActive('/category/basketball')}`}>Basketball</Link>
            <Link to="/category/soccer" className={`transition-colors font-medium ${isActive('/category/soccer')}`}>Soccer</Link>
            <Link to="/category/football" className={`transition-colors font-medium ${isActive('/category/football')}`}>Football</Link>
            <Link to="/category/baseball" className={`transition-colors font-medium ${isActive('/category/baseball')}`}>Baseball</Link>
            <Link to="/edit" className={`transition-colors font-semibold ${location.pathname === '/edit' ? 'text-primary' : 'text-primary hover:text-white'}`}>The Edit</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 dark:text-gray-300 hover:text-primary transition-colors">
              <span className="material-icons-outlined text-2xl">search</span>
            </button>
            <button className="text-gray-500 dark:text-gray-300 hover:text-primary transition-colors hidden sm:block">
              <span className="material-icons-outlined text-2xl">person_outline</span>
            </button>
            <button className="text-gray-500 dark:text-gray-300 hover:text-primary transition-colors relative">
              <span className="material-icons-outlined text-2xl">shopping_bag</span>
              <span className="absolute -top-1 -right-1 bg-primary text-ysh-black text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-dark border-t border-ysh-purple">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-ysh-purple/50">Home</Link>
            <Link to="/category/basketball" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-ysh-purple/50">Basketball</Link>
            <Link to="/category/soccer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-ysh-purple/50">Soccer</Link>
            <Link to="/category/football" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-ysh-purple/50">Football</Link>
            <Link to="/category/baseball" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-ysh-purple/50">Baseball</Link>
            <Link to="/edit" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-ysh-purple/50">The Edit</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;