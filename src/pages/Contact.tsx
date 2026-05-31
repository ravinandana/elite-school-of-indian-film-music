import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { EMAIL, PHONE, WHATSAPP_NUMBER } from '../utils/constants';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi, I would like to know more about your courses!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-black mb-4">Contact Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-yellow-600/10 p-4 rounded-lg">
                    <Mail className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black mb-1">Email</h4>
                    <a href={`mailto:${EMAIL}`} className="text-yellow-600 hover:text-yellow-700 transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="bg-yellow-600/10 p-4 rounded-lg">
                    <Phone className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black mb-1">Phone</h4>
                    <a href={`tel:${PHONE}`} className="text-yellow-600 hover:text-yellow-700 transition-colors">
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="bg-green-600/10 p-4 rounded-lg">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black mb-1">WhatsApp</h4>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-green-600 hover:text-green-700 transition-colors font-semibold"
                    >
                      {WHATSAPP_NUMBER}
                    </button>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-yellow-600/10 p-4 rounded-lg">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black mb-1">Address</h4>
                    <p className="text-gray-600">
                      Elite School of Indian Film Music<br />
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-yellow-600/5">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-serif font-bold text-black mb-2">Instant Response</h3>
              <p className="text-gray-600">
                Get immediate replies via WhatsApp. No waiting around!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-serif font-bold text-black mb-2">Easy Communication</h3>
              <p className="text-gray-600">
                Chat directly with our team. Ask anything anytime!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-serif font-bold text-black mb-2">Quick Support</h3>
              <p className="text-gray-600">
                Fast resolution of all your queries and concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;