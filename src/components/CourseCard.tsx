import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: number;
  name: string;
  description: string;
  level: string;
  icon: string;
  index?: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  name,
  description,
  level,
  icon,
  index = 0,
}) => {
  const colorVariants = [
    'from-yellow-600/20 to-yellow-600/5',
    'from-blue-600/20 to-blue-600/5',
    'from-purple-600/20 to-purple-600/5',
    'from-green-600/20 to-green-600/5',
    'from-pink-600/20 to-pink-600/5',
    'from-orange-600/20 to-orange-600/5',
  ];

  const borderColors = [
    'border-yellow-600',
    'border-blue-600',
    'border-purple-600',
    'border-green-600',
    'border-pink-600',
    'border-orange-600',
  ];

  const bgGradient = colorVariants[index % colorVariants.length];
  const borderColor = borderColors[index % borderColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      className={`bg-gradient-to-br ${bgGradient} rounded-2xl shadow-lg p-8 border-2 ${borderColor} hover:shadow-2xl transition-all duration-300 backdrop-blur-sm`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="text-6xl mb-6 inline-block"
      >
        {icon}
      </motion.div>
      
      {/* Title */}
      <h3 className="text-2xl font-serif font-bold text-black mb-3">{name}</h3>
      
      {/* Description */}
      <p className="text-gray-700 text-sm mb-6 leading-relaxed h-16 overflow-hidden">
        {description}
      </p>

      {/* Level */}
      <div className="mb-6 pb-6 border-b-2 border-gray-300">
        <div className="flex items-center gap-3 text-sm">
          <BarChart3 size={18} className="text-yellow-600 flex-shrink-0" />
          <span className="text-gray-700 font-medium">{level}</span>
        </div>
      </div>

      {/* CTA Button */}
      <Link to="/contact" className="w-full btn-primary flex items-center justify-center gap-2 group">
        Enroll Now
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};