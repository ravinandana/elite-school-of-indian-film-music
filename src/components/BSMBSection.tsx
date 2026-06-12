import React from 'react';
import { motion } from 'framer-motion';
import { BSMB_MEMBERS } from '../utils/constants';
import { Phone, Mail } from 'lucide-react';

const BSMBSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">Meet the Band</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold my-4 text-black">Our Core Members</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Main keyboardist and drummer who perform with BSMB at events and recordings.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BSMB_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-xl shadow-md items-center bg-gray-50"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-2 border-yellow-500"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm text-yellow-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-3">{member.bio}</p>

                <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-3">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-md text-sm font-medium hover:opacity-90"
                    >
                      <Phone size={16} /> {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-gray-800 hover:text-yellow-600"
                    >
                      <Mail size={16} /> {member.email}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BSMBSection;