import { motion } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Sample Gallery Images
  const galleryImages = [
    { id: 1, title: 'Carnatic Vocals Class', category: 'Classes', src: './images/class-image.png' },
    { id: 2, title: 'Guitar Training', category: 'Classes', src: './images/krishna-sir.png' },
    { id: 3, title: 'Student Performance', category: 'Events', src: './images/class-image.png' },
    { id: 4, title: 'Keyboard Class', category: 'Classes', src: './images/class-image.png' },
    { id: 5, title: 'Annual Concert', category: 'Events', src: './images/class-image.png' },
    { id: 6, title: 'Recording Studio', category: 'Facilities', src: './images/studio.png' },
    { id: 7, title: 'BSMB Performance', category: 'Band', src: './images/krishna-sir2.jpeg' },
    { id: 8, title: 'Wedding Performance', category: 'Band', src: './images/concert.jpeg' },
    { id: 9, title: 'Devotional Concert', category: 'Band', src: './images/class-image.png' },
  ];

  // Gallery Videos with your actual YouTube links
  const galleryVideos = [
    { 
      id: 1, 
      title: 'Student Performance', 
      thumbnail: 'https://img.youtube.com/vi/3uzh94dVOwU/maxresdefault.jpg', 
      videoId: '3uzh94dVOwU' 
    },
    { 
      id: 2, 
      title: 'BSMB Wedding Performance', 
      thumbnail: 'https://img.youtube.com/vi/JYbubnIabMo/maxresdefault.jpg', 
      videoId: 'JYbubnIabMo' 
    },
    { 
      id: 3, 
      title: 'Keyboard Composition', 
      thumbnail: 'https://img.youtube.com/vi/GKluSqkn9UY/maxresdefault.jpg', 
      videoId: 'GKluSqkn9UY' 
    },
    { 
      id: 4, 
      title: 'Carnatic Vocals Performance', 
      thumbnail: 'https://img.youtube.com/vi/N2Retf9HlbM/maxresdefault.jpg', 
      videoId: 'N2Retf9HlbM' 
    },
    { 
      id: 5, 
      title: 'Guitar Masterclass', 
      thumbnail: 'https://img.youtube.com/vi/CcrVZoIxo44/maxresdefault.jpg', 
      videoId: 'CcrVZoIxo44' 
    },
    { 
      id: 6, 
      title: 'Devotional Concert Highlights', 
      thumbnail: 'https://img.youtube.com/vi/W42sLm8SyJo/maxresdefault.jpg', 
      videoId: 'W42sLm8SyJo' 
    },
  ];

  const categories = ['All', 'Classes', 'Events', 'Facilities', 'Band'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore moments from our classes, performances, events, and BSMB band concerts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black mb-8 text-center">
              Photo <span className="text-gradient">Gallery</span>
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(image.src)}
                  className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-serif font-bold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black mb-8 text-center">
              Video <span className="text-gradient">Highlights</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryVideos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedVideo(video.videoId)}
                  className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="text-white" size={48} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-serif font-bold">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Students Trained' },
              { number: '50+', label: 'Events Covered' },
              { number: '1000+', label: 'Photos in Gallery' },
              { number: '100+', label: 'Videos Published' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <p className="text-gray-300 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Be Part of Our Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our community of passionate musicians and create memories with us
            </p>

            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Get Started Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
          >
            <img src={selectedImage} alt="Gallery" className="w-full rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full aspect-video"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;