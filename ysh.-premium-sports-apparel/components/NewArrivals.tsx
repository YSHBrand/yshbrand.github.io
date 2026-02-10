import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pro Court Jersey',
    price: 85,
    category: 'Basketball • Performance Mesh',
    tagline: 'Pro Court Jersey',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe2s0DfaXiBZJbgx0a5pT3to9Tzt1hOKwvZ2F5c-bhHBMwyGtmOfZC8XOfuf9bnorXIVAuU9ImRcTu7jWQUc-yKsBaUOHsACHZojxjRRntV1nbagMgMJCDXhnFXA1K8dbzmAM0vzQI9lqOJDaAJ1da5S_Y9M8xi1t1-_ItZbaC2hYxh3YKnuNA3PtyJZ-Qhr7l01ZXvspNJ3nSKJqkcV_HcrJBWc2X3FvLfT_VX-T1kjHckU1S7J3bE3IHd-njHWq_9CJqRJJiTr5N',
    isNew: true
  },
  {
    id: '2',
    name: 'Stadium Hoodie',
    price: 120,
    category: 'Soccer • Heavyweight Cotton',
    tagline: 'Stadium Hoodie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB4oDMNjLU6tp_EKpoEQUJycsqTnoDGd43tIVz9sQLzBaCait1Y_UB2v0BKHBhMFRpB087QTreP2yOcU1FBrtxKn58DBC3lBCvnRrdr8mTOdlkvkH2NOuCfUGCn5xMT2sRkQqT14dcyOO5gtu2YXzmYEol54pdTNN3CrY8sR8ouvXRWAfQn_scOO7sLh7-BEBsYKuS3Gy9jHtcwcVU31OdwUsPg1Sv2UlmuAcCcvICMbjA7dVncDNVNLwI5fl6bLS7NhImqLDtTnex'
  },
  {
    id: '3',
    name: 'Sideline Bomber',
    price: 180,
    category: 'Football • Water Resistant',
    tagline: 'Sideline Bomber',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6ZujAajuuSfSVHwW3S1IOE1_w9ghBxhV1XuX6MGZoRlfd1emYy_DSjmtmXcOwUNoVmSF86idus6ME-MlppEhkdl_qQAowJMGLM1nOzuVEi6VbeQ6ntgLBhyt4BtYjyIF7MmJl3CPromyCmO0bYm0qadfDTSsiQrM4WoAAJZnLqF2MsjQNqzkwt8M_1CTOka55WS3LWNZS66fH5wzMYJ8NNZ6bYDkeSLtRv7ljvaAo4GTfLsvUanljFEmBqrmIzxj7Gbu7ueKXU984',
    isLimited: true
  },
  {
    id: '4',
    name: 'Diamond Tee',
    price: 45,
    category: 'Baseball • Vintage Wash',
    tagline: 'Diamond Tee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUK_QroS1AuoLObk9cHGb9n9Y4PVz-jBpHxtJAQPPkO6ZHjUvO5jN6DOTYCERCa93KdCOsZa1MRXRnzxv1L7e2v4PnpUjLhWD7tCekfgvf1PwitgpI5Oxwnoxe4b8Er2Y9RzY-LK0T8fzuYqOsJz5cviHD-suRKoLriRz1zAZK07cnb-beYNQOzLzFr8QSuL_TtKa-UkfkIOPMtqUB2Ymt1wGCY3XaVkixHkoPezCVLIu7j-qoCVNfn2Ba_jQz0pRwhbuquutN3Did'
  }
];

const NewArrivals: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 dark:text-white">New Arrivals</h2>
          <p className="text-gray-500 dark:text-gray-400">Fresh cuts from the atelier.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <span className="material-icons-outlined">arrow_back</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <span className="material-icons-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto hide-scrollbar pl-4 sm:pl-[calc((100vw-80rem)/2)] lg:pl-[calc((100vw-80rem)/2)]">
        <div className="flex gap-6 pb-8 w-max px-4">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative w-72 md:w-80">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-ysh-purple relative">
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-primary text-ysh-black text-xs font-bold px-2 py-1 rounded z-20">NEW</span>
                )}
                {product.isLimited && (
                  <span className="absolute top-4 left-4 bg-ysh-lavender text-ysh-black text-xs font-bold px-2 py-1 rounded z-20">LIMITED</span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <button className="w-full bg-white dark:bg-ysh-black text-ysh-black dark:text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-primary hover:text-ysh-black transition-colors flex justify-center items-center gap-2">
                    <span className="material-icons-outlined text-sm">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="mt-4">
                <Link to={`/product/${product.id}`} className="block">
                    <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{product.name}</h3>
                    <span className="text-primary font-semibold">${product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.category}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;