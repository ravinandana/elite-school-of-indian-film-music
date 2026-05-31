import { motion } from 'framer-motion';
import { CourseCard } from './CourseCard';
import { COURSES } from '../utils/constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CoursesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-600 font-semibold uppercase tracking-widest text-sm"
          >
            Our Programs
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold my-4 text-black"
          >
            Comprehensive Courses in <span className="text-gradient">Indian Film Music</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Choose from our wide range of professionally designed courses taught by industry experts
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} {...course} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">Ready to Start Your Musical Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of successful students. Book your free demo class today!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
              Join Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/courses" className="bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
              View All Courses
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Features */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-600 mb-2">6-9</div>
            <p className="text-gray-700 font-semibold">Months Duration</p>
            <p className="text-gray-600 text-sm mt-2">Flexible learning schedules</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-600 mb-2">20+</div>
            <p className="text-gray-700 font-semibold">Expert Instructors</p>
            <p className="text-gray-600 text-sm mt-2">Industry professionals</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-600 mb-2">100%</div>
            <p className="text-gray-700 font-semibold">Success Rate</p>
            <p className="text-gray-600 text-sm mt-2">Student satisfaction</p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};