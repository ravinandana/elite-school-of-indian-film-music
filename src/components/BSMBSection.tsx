import { motion } from 'framer-motion';
import { MessageCircle, Phone, Star } from 'lucide-react';
import { BAND_SERVICES, BSMB_BAND, WHATSAPP_NUMBER } from '../utils/constants';

export const BSMBSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hi BSMB! I would like to inquire about your concert services for my event.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

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
          <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">Professional Music Band</span>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4"
          >
            <span className="text-yellow-400">BSMB</span> - Bangalore South Music Band
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-yellow-300 font-semibold mb-4"
          >
            {BSMB_BAND.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            {BSMB_BAND.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BAND_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(217, 119, 6, 0.3)' }}
              className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-2xl p-8 border-2 border-yellow-600 hover:border-yellow-400 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-6xl mb-6 inline-block"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-serif font-bold mb-3 text-white">
                {service.name}
              </h3>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed h-16 overflow-hidden">
                {service.description}
              </p>

              <div className="space-y-2 mb-6 pb-6 border-b border-yellow-600/30">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Star size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-yellow-300 font-semibold text-center">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-yellow-900/20 rounded-lg p-6 text-center border border-yellow-600">
            <div className="text-4xl font-bold text-yellow-300 mb-2">50+</div>
            <p className="text-gray-300 font-semibold">Events Performed</p>
          </div>

          <div className="bg-yellow-900/20 rounded-lg p-6 text-center border border-yellow-600">
            <div className="text-4xl font-bold text-yellow-300 mb-2">15+</div>
            <p className="text-gray-300 font-semibold">Expert Musicians</p>
          </div>

          <div className="bg-yellow-900/20 rounded-lg p-6 text-center border border-yellow-600">
            <div className="text-4xl font-bold text-yellow-300 mb-2">100%</div>
            <p className="text-gray-300 font-semibold">Client Satisfaction</p>
          </div>

          <div className="bg-yellow-900/20 rounded-lg p-6 text-center border border-yellow-600">
            <div className="text-4xl font-bold text-yellow-300 mb-2">5★</div>
            <p className="text-gray-300 font-semibold">Average Rating</p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">
            Why Choose <span className="text-yellow-400">BSMB?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-8 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Professional Quality</h4>
              <p className="text-gray-300">Expert musicians trained in multiple genres and styles</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-8 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎼</div>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Custom Arrangements</h4>
              <p className="text-gray-300">Tailor-made performances for your specific event needs</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-8 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Punctual & Reliable</h4>
              <p className="text-gray-300">We arrive on time and deliver outstanding performances</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-8 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎤</div>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Modern & Traditional</h4>
              <p className="text-gray-300">Perfect blend of contemporary and classical music</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-8 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Professional Setup</h4>
              <p className="text-gray-300">Complete sound system and professional equipment</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-8 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="text-lg font-serif font-bold text-white mb-2">Passionate Performers</h4>
              <p className="text-gray-300">Musicians who deliver with passion and dedication</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">Book BSMB for Your Event</h3>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Make your celebration unforgettable with professional live music performances. Contact us today!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </button>

            <a
              href={`tel:${BSMB_BAND.phone}`}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>

          <p className="text-sm mt-6 opacity-90">
            Available for weddings, temples, festivals, and special events across Bangalore
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BSMBSection;