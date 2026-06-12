import React from 'react';
import { motion } from 'framer-motion';
import BSMBSection from '../components/BSMBSection';
import { BSMB_BAND, BAND_SERVICES } from '../utils/constants';

const BSMB: React.FC = () => {
  return (
    <div>
      {/* Hero - match gallery style */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-500 font-semibold uppercase tracking-widest text-sm">BSMB Band</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold my-4">
              {BSMB_BAND.name}
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">{BSMB_BAND.description}</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              {BSMB_BAND.phone && (
                <a href={`tel:${BSMB_BAND.phone}`} className="inline-flex items-center bg-yellow-500 text-black px-4 py-2 rounded-md font-medium">
                  Call: {BSMB_BAND.phone}
                </a>
              )}
              {BSMB_BAND.whatsapp && (
                <a
                  href={`https://wa.me/${BSMB_BAND.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm text-yellow-400 underline"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - updated styling to match gallery/course sections */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold my-4 text-black">Event Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional music for weddings, devotional gatherings and folk events — curated packages to suit your occasion.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          >
            {BAND_SERVICES.map((service) => (
              <div key={service.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="text-sm text-gray-500 font-medium">{service.price}</div>
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>

                <ul className="mt-4 space-y-2 text-gray-700">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-yellow-500">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  {(() => {
                    const waNumber = (BSMB_BAND.whatsapp || BSMB_BAND.phone || '').replace(/\D/g, '');
                    const bookText = encodeURIComponent(`Hello, I would like to book ${BSMB_BAND.name} for the ${service.name} package. Please share availability and rates.`);
                    const enquireText = encodeURIComponent(`Hello, I have an enquiry about the ${service.name} package offered by ${BSMB_BAND.name}.`);
                    const waBase = waNumber ? `https://wa.me/${waNumber}` : null;

                    return (
                      <>
                        <a
                          href={waBase ? `${waBase}?text=${bookText}` : `tel:${BSMB_BAND.phone}`}
                          target={waBase ? '_blank' : undefined}
                          rel={waBase ? 'noreferrer' : undefined}
                          className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Book Now
                        </a>

                        <a
                          href={waBase ? `${waBase}?text=${enquireText}` : `tel:${BSMB_BAND.phone}`}
                          target={waBase ? '_blank' : undefined}
                          rel={waBase ? 'noreferrer' : undefined}
                          className="inline-flex items-center gap-2 text-sm text-gray-700 underline"
                        >
                          Enquire
                        </a>
                      </>
                    );
                  })()}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Member profile cards */}
      <BSMBSection />
    </div>
  );
};

export default BSMB;