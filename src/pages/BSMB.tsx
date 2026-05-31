import { motion } from 'framer-motion';
import { MessageCircle, Phone, Star, MapPin } from 'lucide-react';
import { BAND_SERVICES, BSMB_BAND, WHATSAPP_NUMBER } from '../utils/constants';

const BSMB = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hi BSMB! I would like to inquire about your concert services for my event.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">Professional Music Band</span>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif font-bold mb-6 mt-4"
            >
              <span className="text-yellow-400">BSMB</span> - Bangalore South Music Band
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-yellow-300 font-semibold mb-4"
            >
              {BSMB_BAND.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {BSMB_BAND.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold my-4 text-black">
              Professional Concert <span className="text-gradient">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from our premium music performance packages for your special events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BAND_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(217, 119, 6, 0.2)' }}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-600 hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-serif font-bold text-black mb-3">
                  {service.name}
                </h3>

                <p className="text-gray-700 text-sm mb-6 leading-relaxed h-16 overflow-hidden">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 pb-6 border-b-2 border-gray-300">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Star size={16} className="text-yellow-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-yellow-600 font-semibold text-center">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold my-4 text-black">
              What Makes <span className="text-gradient">BSMB Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-black mb-2">Professional Quality</h3>
                  <p className="text-gray-600">
                    Expert musicians trained in multiple genres with years of performance experience
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start">
                <div className="text-4xl">🎼</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-black mb-2">Custom Arrangements</h3>
                  <p className="text-gray-600">
                    Tailor-made performances designed specifically for your event and preferences
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-black mb-2">Punctual & Reliable</h3>
                  <p className="text-gray-600">
                    We arrive on time, fully prepared, and deliver outstanding performances every time
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start">
                <div className="text-4xl">🎤</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-black mb-2">Modern & Traditional</h3>
                  <p className="text-gray-600">
                    Perfect blend of contemporary hits and classical masterpieces for all audiences
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start">
                <div className="text-4xl">💼</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-black mb-2">Professional Setup</h3>
                  <p className="text-gray-600">
                    Complete sound system, professional equipment, and technical support included
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start">
                <div className="text-4xl">❤️</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-black mb-2">Passionate Performers</h3>
                  <p className="text-gray-600">
                    Musicians who love what they do and deliver every performance with genuine passion
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-gray-300 font-semibold">Events Performed</p>
              <p className="text-gray-400 text-sm mt-2">Across Bangalore</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <p className="text-gray-300 font-semibold">Expert Musicians</p>
              <p className="text-gray-400 text-sm mt-2">Multi-talented performers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <p className="text-gray-300 font-semibold">Satisfaction Rate</p>
              <p className="text-gray-400 text-sm mt-2">Happy clients always</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-yellow-400 mb-2">5★</div>
              <p className="text-gray-300 font-semibold">Average Rating</p>
              <p className="text-gray-400 text-sm mt-2">From verified clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">Event Types</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold my-4 text-black">
              Perfect For Every <span className="text-gradient">Celebration</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💒', name: 'Weddings', desc: 'Pre-wedding to reception' },
              { icon: '🙏', name: 'Temples', desc: 'Spiritual gatherings' },
              { icon: '🎭', name: 'Festivals', desc: 'Cultural celebrations' },
              { icon: '🎪', name: 'Corporate', desc: 'Company events' },
              { icon: '🏠', name: 'Housewarming', desc: 'Home celebrations' },
              { icon: '👨‍👩‍👧', name: 'Family', desc: 'Gatherings & parties' },
              { icon: '🎓', name: 'Educational', desc: 'School & college events' },
              { icon: '🎉', name: 'All Occasions', desc: 'Any special event' },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-lg p-6 text-center border-2 border-yellow-200 hover:border-yellow-600 transition-all"
              >
                <div className="text-4xl mb-3">{event.icon}</div>
                <h4 className="font-serif font-bold text-black mb-1">{event.name}</h4>
                <p className="text-sm text-gray-600">{event.desc}</p>
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
              Ready to Book BSMB?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Make your celebration unforgettable with professional live music. Contact us today for custom quotes and availability!
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
                className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>
            </div>

            <p className="text-sm mt-8 opacity-90">
              ⚡ Available for events across Bangalore • Fast response • Professional setup included
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="section-padding bg-gray-100">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Phone className="text-yellow-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-serif font-bold text-black mb-2">Call Us</h3>
              <a href={`tel:${BSMB_BAND.phone}`} className="text-yellow-600 hover:text-yellow-700 font-semibold">
                {BSMB_BAND.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MessageCircle className="text-green-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-serif font-bold text-black mb-2">WhatsApp</h3>
              <button
                onClick={handleWhatsAppClick}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                {BSMB_BAND.whatsapp}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MapPin className="text-yellow-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-serif font-bold text-black mb-2">Location</h3>
              <p className="text-gray-600">
                Bangalore, Karnataka<br />
                Available across the city
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BSMB;