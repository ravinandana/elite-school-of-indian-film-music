import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappMessage = `
📝 *NEW INQUIRY FROM WEBSITE*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
📌 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
_This message was sent from Elite School website_
    `.trim();

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    // Show success message
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // Hide success after 4 seconds
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="lg:col-span-2"
    >
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
        >
          <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-2xl font-serif font-bold text-green-700 mb-2">Perfect!</h3>
          <p className="text-green-600 mb-4">
            Your message has been sent via WhatsApp. We'll respond within 24 hours!
          </p>
          <p className="text-sm text-green-500">Opening WhatsApp...</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91-9686212053"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Course Inquiry / Demo Class"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center gap-2 group hover:shadow-lg transition-all"
          >
            <MessageCircle size={20} />
            Send via WhatsApp
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-xs text-gray-500 text-center">
            💬 Click above to send your message directly to our WhatsApp. Quick response guaranteed!
          </p>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;