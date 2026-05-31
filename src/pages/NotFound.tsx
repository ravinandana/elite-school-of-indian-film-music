import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <motion.h1
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-9xl font-bold text-yellow-600 mb-4"
                >
                    404
                </motion.h1>

                <h2 className="text-4xl font-serif font-bold mb-4">Page Not Found</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                <Link to="/" className="btn-primary inline-flex items-center gap-2 group">
                    Go Home
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;