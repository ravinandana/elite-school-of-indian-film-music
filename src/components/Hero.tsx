import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-black to-black" />
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />

      {/* Floating Music Notes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-600 text-4xl opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Music size={48} />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-lg relative z-10 text-center text-white"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <img 
            src="/logo.png" 
            alt="Elite School Logo" 
            className="h-40 w-40 object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-yellow-600/20 border border-yellow-600 text-yellow-400 rounded-full text-sm font-semibold">
            Welcome to Excellence in Music
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
        >
          Elite School of <span className="text-gradient">Indian Film Music</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Master the art of Indian film music with industry experts. Learn keyboard, piano, vocal training, and film music production from experienced live concert performers.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact" className="btn-primary flex items-center gap-2 group">
            Join Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/courses" className="btn-outline flex items-center gap-2">
            Book Free Demo
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-8 border-t border-gray-700"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-yellow-600">500+</p>
            <p className="text-gray-300 text-sm">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-yellow-600">50+</p>
            <p className="text-gray-300 text-sm">Courses Offered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-yellow-600">20+</p>
            <p className="text-gray-300 text-sm">Expert Faculty</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};