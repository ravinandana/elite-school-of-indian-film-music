import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAVIGATION, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../utils/constants';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleNavClick = () => {
    setIsOpen(false);
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 bg-white shadow-lg"
    >
      <div className="container-lg">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className="font-medium text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="hidden md:flex items-center gap-2 btn-primary"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className="font-medium text-gray-700 hover:text-yellow-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleWhatsApp();
                  setIsOpen(false);
                }}
                className="btn-primary w-full justify-center flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};