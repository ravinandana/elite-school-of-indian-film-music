import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  message,
  rating,
  id,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (id - 1) * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.div key={i} whileHover={{ scale: 1.2 }}>
            <Star size={20} className="fill-yellow-600 text-yellow-600" />
          </motion.div>
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-700 italic mb-6 leading-relaxed h-20 overflow-hidden">
        "{message}"
      </p>

      {/* Author */}
      <div className="border-t pt-4">
        <h4 className="font-serif font-bold text-black text-lg">{name}</h4>
        <p className="text-yellow-600 text-sm font-semibold">{role}</p>
      </div>
    </motion.div>
  );
};