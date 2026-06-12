import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EMAIL, PHONE, WHATSAPP_NUMBER, SOCIAL_LINKS } from '../utils/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi, I would like to know more!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Courses', href: '/courses' },
        { name: 'BSMB Band', href: '/bsmb' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Music Classes', href: '/courses' },
        { name: 'BSMB Band', href: '/bsmb' },
        { name: 'Events', href: '/bsmb' },
        { name: 'Performances', href: '/bsmb' },
      ]
    },
  ];

  const handleNavClick = (href: string) => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">
                Elite School
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional music education and concert services.
              </p>
              <div className="flex gap-4">
                <a href={SOCIAL_LINKS[1].url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href={SOCIAL_LINKS[0].url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href={SOCIAL_LINKS[2].url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            {footerLinks.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Phone size={18} /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Mail size={18} /> {EMAIL}
                </a>
                <button onClick={handleWhatsAppClick} className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <MessageCircle size={18} /> WhatsApp
                </button>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Elite School of Indian Film Music. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            Developed by <span className="font-medium">Ravinandana</span> — <a href={`mailto:${EMAIL}`} className="hover:text-yellow-400 underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;