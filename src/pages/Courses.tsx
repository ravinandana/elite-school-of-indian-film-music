import { motion } from 'framer-motion';
import { CourseCard } from '../components/CourseCard';
import { COURSES } from '../utils/constants';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-gradient">Music Courses</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed by industry experts. Learn from the best, become the best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">All Courses</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold my-4 text-black">
              Choose Your <span className="text-gradient">Musical Path</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From classical vocals to modern instruments, we offer courses for all skill levels and musical interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {COURSES.map((course, index) => (
              <CourseCard key={course.id} {...course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
              Why Choose Our <span className="text-gradient">Courses?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start mb-4">
                <Award className="text-yellow-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-black mb-2">Expert Faculty</h3>
                  <p className="text-gray-600">
                    Learn from accomplished musicians and composers with decades of industry experience in Indian film music.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start mb-4">
                <Clock className="text-yellow-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-black mb-2">Flexible Schedules</h3>
                  <p className="text-gray-600">
                    Classes available in morning, afternoon, and evening slots. Learn at your own pace with personalized attention.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start mb-4">
                <Users className="text-yellow-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-black mb-2">Small Batches</h3>
                  <p className="text-gray-600">
                    Limited class sizes ensure personalized attention and better learning outcomes for every student.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600"
            >
              <div className="flex gap-4 items-start mb-4">
                <Award className="text-yellow-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-black mb-2">Certification</h3>
                  <p className="text-gray-600">
                    Earn industry-recognized certificates upon successful completion of your course.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
              Course <span className="text-gradient">Structure</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
              Each course is carefully designed to provide comprehensive learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📚', title: 'Theory Classes', desc: 'Foundation and advanced music theory' },
              { icon: '🎤', title: 'Practical Training', desc: 'Hands-on instrument/vocal practice' },
              { icon: '🎵', title: 'Performance', desc: 'Stage performances and recitals' },
              { icon: '🏆', title: 'Certification', desc: 'Industry-recognized completion certificate' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 text-center border-2 border-yellow-200 hover:border-yellow-600 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-serif font-bold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
              Student <span className="text-gradient">Success Stories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ravinandana H S',
                course: 'Carnatic Vocals',
                quote: 'Elite School transformed my musical journey. The faculty is incredibly supportive and knowledgeable.',
              },
              {
                name: 'Raj Kumar',
                course: 'Guitar Mastery',
                quote: 'Best decision I made! Now performing professionally at events across the city.',
              },
              {
                name: 'Ananya Singh',
                course: 'Light Music',
                quote: 'Professional training with world-class instructors. Highly recommended!',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-600 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 h-20 overflow-hidden">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-serif font-bold text-black">{testimonial.name}</h4>
                  <p className="text-yellow-600 text-sm font-semibold">{testimonial.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Begin Your Musical Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your free demo class today. No commitments, just pure music!
            </p>

            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Book Free Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;