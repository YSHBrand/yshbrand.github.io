import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Header Block */}
          <div className="md:col-span-4 flex flex-col justify-center items-start p-8">
            <span className="text-primary font-semibold tracking-wider uppercase mb-2">Categories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Choose Your Arena.</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
              Curated collections for every enthusiast. From the hardwood to the diamond, find your fit.
            </p>
            <Link to="/category/all" className="text-gray-900 dark:text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              View All Collections
            </Link>
          </div>

          {/* Basketball (Large Block) */}
          <Link to="/category/basketball" className="md:col-span-8 md:row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzcimjkOEMuUJoYh9jGMIAAvUD7DnwAnS58FPicscchpAICcAQqQRhwS15P7sXpMeToiHwZUoA85pW8Jw2jsLcbZG0UFPDmOBBU_oYdfOk1hcUcJtYdJQ6cORf7cIf-O0kmuWvBS4XkA1M3TgD76V4fFClCiy5tAwQTFVbY1ctVO18ATdQevCYxaYfqDkbLy8AKU7_WLPYcDp5PiUswLAKnrsYzyKQ5PikR8ZLADv3ArEugMZ4NBNyV77mzOXS8UYiHXg2nmeguRYX" 
              alt="Basketball player dunking on street court" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-primary font-bold tracking-wider text-sm mb-2 uppercase">Collection 01</p>
              <h3 className="text-4xl text-white font-bold">Basketball</h3>
              <p className="text-gray-300 mt-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Courtside culture redefined. Performance wear meets urban aesthetic.
              </p>
            </div>
          </Link>

          {/* Soccer */}
          <Link to="/category/soccer" className="md:col-span-4 relative group rounded-2xl overflow-hidden cursor-pointer block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLjhg7u03U9Aeqf44Ag_OnmW5kGIPhwVl5JJGgfHFqOtOnG7Sr7umxzsg8H6v6l_MxzatxclhIFggGSgPLwmXVtNp1fQjg-yMtPvDCZf8ErsvlIEesNDff1UKp1sFK5K1dRyR72WYuImf5VV8Vhow0dB6sJhi1ynWDTQZHaOmB9kOPwsZr3Rq8INUcpvrdr2gKbvAmAVcSCY4RXne2vsxn4mrY37B8VY0Ja8nUpk_uRsoW6QyxkONq1P6qZiwcmkqiT-9uQznryCq" 
              alt="Soccer stadium at night" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl text-white font-bold">Soccer</h3>
            </div>
          </Link>

          {/* Football */}
          <Link to="/category/football" className="md:col-span-4 relative group rounded-2xl overflow-hidden cursor-pointer block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfnkq2sM_KTMRFW46295Uz1IyiZsI_whC5QFpOsGL9gWhxGAMoBrffNILFMe0hT_vurpWSPmxQcAmbR2s0zu-tfjiLkDrNPjb5m_uw3y44dhd-szP7dwN7ldH_ixntbTvaQZTCsxwXHHNfaDZqcAdMW2xKxvDrlBusMT6CNVzRGHm1eXG57nQWK_I4zhnts3kagvjLZI1UdJfQvofEuuS-gUL58or_B6ND_3qtlXI9m0UzBywBkiGbmzHsNtIY0yK5myuJDpfkbjmp" 
              alt="American football player running" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl text-white font-bold">Football</h3>
            </div>
          </Link>

          {/* Baseball */}
          <Link to="/category/baseball" className="md:col-span-4 relative group rounded-2xl overflow-hidden cursor-pointer block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtmJlU0AdkTmovndVt9ytioCL0-ZJC0lH_F5ae94xpY3l1C67FxVKJrTrzBPd0pP7Ou8l69wHOofYNpp1c6ka2rHi-8PGy5hIoua9hr-z41J7Kt0YlN9afNo0jgUHXh6yhJfsx3bvdHwkGNs1hIm1K0VwWdgGjuY1Wvu_B8l5guLYd2TPRMZVCwvYVNIfvpLX_toRXlN5SHyXnl7DsDmGuokav_XBJL3uA2wKN0KpZhxtViv2JK-Md5nU7uIW0KnUuBccxVXR7xD4V" 
              alt="Baseball bat and glove on bench" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl text-white font-bold">Baseball</h3>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;