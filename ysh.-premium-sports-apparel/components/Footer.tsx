import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ysh-black border-t border-ysh-purple pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">YSH.</Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium sports apparel designed for the modern fan. Elevating the game day experience through quality and design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-icons-outlined">facebook</span></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-icons-outlined">smart_display</span></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-icons-outlined">alternate_email</span></a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/category/new" className="text-gray-400 hover:text-primary transition-colors text-sm">New Arrivals</Link></li>
              <li><Link to="/category/best-sellers" className="text-gray-400 hover:text-primary transition-colors text-sm">Best Sellers</Link></li>
              <li><Link to="/category/basketball" className="text-gray-400 hover:text-primary transition-colors text-sm">Basketball</Link></li>
              <li><Link to="/category/soccer" className="text-gray-400 hover:text-primary transition-colors text-sm">Soccer</Link></li>
              <li><Link to="/gift-cards" className="text-gray-400 hover:text-primary transition-colors text-sm">Gift Cards</Link></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About YSH.</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link to="/sustainability" className="text-gray-400 hover:text-primary transition-colors text-sm">Sustainability</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-primary transition-colors text-sm">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ysh-purple pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2024 YSH. Brand. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;