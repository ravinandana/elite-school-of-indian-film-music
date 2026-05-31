import { motion } from 'framer-motion';
import { useState } from 'react';

// Use public folder images
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Recording Studio',
    category: 'studio',
    image: '/studio.jpg',
    description: 'Professional recording setup'
  },
  {
    id: 2,
    title: 'Keyboard Class',
    category: 'class',
    image: '/studio.jpg',
    description: 'Keyboard training sessions'
  },
  {
    id: 3,
    title: 'Guitar Training',
    category: 'class',
    image: '/studio.jpg',
    description: 'Guitar learning classes'
  },
  {
    id: 4,
    title: 'Vocal Training',
    category: 'class',
    image: '/studio.jpg',
    description: 'Singing classes'
  },
];

export const GallerySection = () => {
  const [filter, setFilter] = useState('all');

  console.log("ravi",GALLERY_ITEMS);
  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4">
            Gallery & <span className="text-yellow-400">Moments</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore our studio, classes, and memorable moments from our students
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'studio', 'class'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold uppercase text-sm transition-all ${
                filter === category
                  ? 'bg-yellow-600 text-white'
                  : 'bg-yellow-600/20 text-yellow-400 border-2 border-yellow-600 hover:bg-yellow-600/40'
              }`}
            >
              {category === 'all' ? 'All' : category === 'studio' ? 'Studio' : 'Classes'}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 bg-gray-800 border-2 border-yellow-600/30 hover:border-yellow-400 transition-all duration-300">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.image}`);
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-yellow-600/20', 'to-yellow-600/5');
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


